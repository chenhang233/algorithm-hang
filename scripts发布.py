import paramiko
import os
import traceback

def auto_linux_cmd(servers: list, commands: list, local_filepath: str = "", remote_filepath: str = ""):
    for s_info in servers:
        try:
            # 创建SSH客户端对象
            client = paramiko.SSHClient()
            # 设置自动添加主机密钥
            client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
            # 连接到目标服务器
            print(s_info)
            client.connect(hostname=s_info["host"], port=s_info["port"], username=s_info["username"],
                           password=s_info["password"])
            name = s_info["name"]
            print("connected !!! current server name:  %s", name)
            if local_filepath != "":
                if not os.path.isfile(local_filepath):
                    print(f"Local file does not exist: {local_filepath}")
                    return
                sftp = client.open_sftp()
                print("local_filepath: %s remote_filepath: %s \n" % (local_filepath, remote_filepath))
                try:
                   sftp.put(local_filepath, remote_filepath)
                   print("upload success !!!")
                except Exception as e:
                        print(f"Error type: {type(e).__name__}")  # 打印异常类型
                        print(f"Error message: {str(e)}")  # 打印错误信息
                        traceback.print_exc()
                        return
            cmds = ""
            for cmd_1 in commands:
                cmds += cmd_1
                cmds += ';'
            print("cmd: %s" % cmds)
            stdin, stdout, stderr = client.exec_command(cmds)
            # 输出命令结果
            print('Command output:\n')
            print(stdout.read().decode())
            print('Command err output:\n')
            print(stderr.read().decode())

        except Exception as e:
            print("Error connecting to server or executing the command. name: %s", s_info["name"])
            print(e)
            return
        finally:
            client.close()
    print("All execution completed")
    
    
basic_servers = [
    {"host": "192.168.0.5", "port": 22, "username": "", "password": "", "name": ""}
]

version_name = "hymx_base_server-v2.1.0"
version = "%s.tar.gz" % version_name
old_version_name = "hymx_base_server-v2.0.6"
basic_commands = [
    "cd /home/server",
    "echo 'y' | /root/node-v18.20.3-linux-x64/bin/mydog stop",
    "pkill node",
    "rm -rf %s" % old_version_name,
    "ls",
    "tar -zxvf %s " % version,
    "cp /home/.env %s/" % version_name,
    "cd %s" % version_name,
    "mkdir log",
    "npm i",
    "cd ./src",
    "/root/node-v18.20.3-linux-x64/bin/tsc",
    "cd ../dist/",
    "/root/node-v18.20.3-linux-x64/bin/mydog start -d -e production",
    "ps aux | grep base_server",
]
if __name__=='__main__':
    auto_linux_cmd(basic_servers, basic_commands, "C:\\Users\\Administrator\\Desktop\\%s" % version, "/home/server/%s" % version)
