#### 查看配置列表
```
git config --list
git config <key>
```

#### 配置git代理 socks:

```
git config --global http.proxy socks5://127.0.0.1:7890
git config --global https.proxy socks5://127.0.0.1:7890

如果只想对某个地址进行代理，比如对 github.com 代理，就这样：

git config --global http.https://github.com.proxy socks5://127.0.0.1:7890
```

#### 配置git代理 http:
```
# 注意修改成自己的IP和端口号
git config --global http.proxy http://127.0.0.1:7890 
git config --global https.proxy http://127.0.0.1:7890

# 取消代理
git config --global --unset http.proxy
git config --global --unset https.proxy
```
