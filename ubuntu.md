步骤 1：识别 WiFi 网络设备
在终端命令行中通过命令获取 Wi-Fi 网络接口的名称，命令如下：

```
    ip link show
    iw list
```

步骤 2：建立新的热点

```
$ IFNAME="wlx90de80e6180c"
$ CON_NAME="hang-server233"
新增连接：
$ nmcli con add type wifi ifname $IFNAME con-name $CON_NAME autoconnect yes ssid $CON_NAME
```

步骤 3：设定连线方式
通过以下命令将连接方式设置为共享。

```
    nmcli con modify $CON_NAME 802-11-wireless.mode ap 802-11-wireless.band bg ipv4.method shared
```

第 4 步：设置热点密码

```
    nmcli con modify $CON_NAME wifi-sec.key-mgmt wpa-psk
    nmcli con modify $CON_NAME wifi-sec.psk "00000000"
```

完成后打开连接。

```
    nmcli con up $CON_NAME
```

如果开启成功，则命令会有如下输出：

Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/7)

通过以下命令检查详细的连接信息。

```
    nmcli connection show $CON_NAME
```

步骤 5 显示所有网络连接的信息:

```
        nmcli connection show
```

删除 wifi 连接信息：

```
    nmcli connection down hang-server233 关闭
    nmcli connection delete <SSID>
```

显示“xx”连接配置文件的详细信息。

```
     nmcli -p connection show "hang-server233"
```



连接wifi
```
    nmcli device wifi list
    nmcli device wifi connect YOUR_SSID password YOUR_PASSWORD
    nmcli -f IN-USE,SSID,RSNA,SIGNAL dev wifi
```
