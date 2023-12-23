import { useNavigation } from "@react-navigation/native";
import { Icon } from "assets";
import { useEffect, useState } from "react";
import { Alert, PermissionsAndroid, Pressable, ScrollView, Text, View } from "react-native";
import fs from 'react-native-fs';

type File = { name: string, path: string, type: string, size?: number }
type Files = File[]

export function ChooseScreen() {
  const { canGoBack, goBack, navigate } = useNavigation()
  const [hasPermission, updatePermissionState] = useState(false)
  const [files, setFiles] = useState<Files>([])

  function navigateBack() {
    canGoBack() ? goBack() : navigate('home')
  }
  function onFolderClick(folderPath: string) { }
  function onFolderLongPress(filePath: string) { }
  function onFileLongPress(filePath: string) { }

  async function handleStoragePermission() {
    PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ])
      .then(res => {
        let flag = 0;
        if (res["android.permission.READ_EXTERNAL_STORAGE"] != 'granted'
          || res["android.permission.WRITE_EXTERNAL_STORAGE"] != 'granted') {
          Alert.alert("Storage Permission", "Please allow the storage permission.")
        } else {
          updatePermissionState(true)
        }
      }).catch(err => Alert.alert("Permission Error:", `${err}`))
  }

  useEffect(() => {
    handleStoragePermission()
  }, [])
  const [breadcrumbs, setBreadcrumbs] = useState<Files>([])
  async function updateFiles(path: string = fs.ExternalStorageDirectoryPath) {
    if (hasPermission) {
      console.log(await fs.readDir(path
      ))
      let _files_: Files = [];
      let s = await fs.stat(path)
      if (s.isFile()) return;
      let paths = await fs.readDir(path ?? fs.ExternalStorageDirectoryPath)
      console.log(path)
      if (path) {
        let p = path.replace(`${fs.ExternalStorageDirectoryPath}/`, '')
        let pp = p.split('/')
        let _b: Files = []
        _b.push({
          name: "Internal Storage",
          path: fs.ExternalStorageDirectoryPath,
          type: ''
        })
        let ppp = fs.ExternalStorageDirectoryPath
        for (let i of pp) {
          ppp += "/" + i
          if (await fs.exists(ppp)) {
            let stat = await fs.stat(ppp)
            console.log('stat', stat)
            _b.push({
              name: (() => {
                let sp = stat.originalFilepath
                return sp.split('/').pop() || ""
              })(),
              path: stat.originalFilepath,
              type: ''
            })
          }
        }
        setBreadcrumbs(_b)
        // console.log(p, p.split('/'))
      } else {
        setBreadcrumbs([{ name: "Internal Storage", path: fs.ExternalStorageDirectoryPath, size: 0, type: '' }])
      }
      console.log(
        path, fs.ExternalStorageDirectoryPath
      )
      paths.map(f => {
        _files_.push({
          name: f.name,
          path: f.path,
          type: '',
          size: f.size
        });
      });
      fs.ExternalStorageDirectoryPath
      setFiles(_files_)
    }
  }
  useEffect(() => { updateFiles() }, [hasPermission])

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', margin: 18 }}>
        <Pressable onPress={navigateBack}>
          <Icon source="arrow-left" />
        </Pressable>
      </View>

      <View style={{ flexDirection: 'row', gap: 8 }}>
        {breadcrumbs.map(b =>
          <Pressable onPress={() => {
            updateFiles(b.path)
          }}
            style={{ padding: 4, paddingHorizontal: 12, borderRadius: 9, backgroundColor: '#00000025' }}
          >
            <Text>{b.name}</Text>
          </Pressable>
        )}
      </View>

      <ScrollView>
        {files.map(f =>
          <Pressable key={f.path} onPress={() => {
            updateFiles(f.path)
          }}>
            <Text>{f.name}</Text>
            <Text>{f.path}</Text>
            <Text>{f.size}</Text>
          </Pressable>

        )}
      </ScrollView>
    </View>
  )
}

// const STORAGE_PERMISSIONS = {
//   'android.permission.READ_EXTERNAL_STORAGE': PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//   'android.permission.WRITE_EXTERNAL_STORAGE': PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//   // 'android.permission.READ_MEDIA_IMAGES': PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
//   // 'android.permission.READ_MEDIA_VIDEO': PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
//   // 'android.permission.READ_MEDIA_AUDIO': PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO,
// }
