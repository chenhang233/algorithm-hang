###### linux查看ssh登录日志
```
  cat /var/log/auth.log | grep sshd
  netstat -anp|grep :22
```

###### linux查看cpu 负载
```
watch -n 1 'top -bn1 | head -n 5'
ps -eo pid,pcpu,args --sort=-pcpu 

%Cpu(s): 81.1 us：用户空间（user）占用 CPU 的百分比
%Cpu(s): 14.9 sy：内核空间（system）占用 CPU 的百分比
%Cpu(s): 0.0 ni：用户进程改变过优先级的占用 CPU 的百分比
%Cpu(s): 0.0 id：空闲 CPU 的百分比
%Cpu(s): 1.4 wa：等待 I/O 完成占用 CPU 的百分比
%Cpu(s): 0.0 hi：硬中断（hardware IRQ）占用 CPU 的百分比
%Cpu(s): 2.7 si：软中断（software IRQ）占用 CPU 的百分比
%Cpu(s): 0.0 st：被偷取（steal）的 CPU 时间的百分比

排行
ps -eo pid,comm,pcpu,etime | sort -k 3 -r
```
