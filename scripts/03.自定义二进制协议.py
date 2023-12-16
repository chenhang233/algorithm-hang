import struct
import time
import threading


def int2byte(v: int) -> bytes:
    return struct.pack('B', v)


def float2bytes(v: float) -> bytes:
    return struct.pack('f', v)


def bytes2float(v: bytes) -> float:
    return struct.unpack('f', v)[0]


# 协议生成
# 开始 + 命令 + 数据长度 + 数据 + 校验位 + 结束
#  1      1       1       n      1      1
# 0x7a   0x01      ?      ?      ?     0x7b
# 校验位 = 命令 + 数据长度 + 所有数据的和
HEAD = 0x7a
END = 0x7b


def make_protocol(cmd, data):
    protocol = b''
    data_len = len(data)
    print("data_len=",data_len)
    protocol += int2byte(HEAD)
    protocol += int2byte(cmd)
    protocol += int2byte(data_len)

    check = cmd + data_len
    for i in data:
        protocol += int2byte(i)
        check += i
    check &= 0xFF00
    check >>= 8

    protocol += int2byte(check)
    protocol += int2byte(END)
    return protocol


def make_pid_protocl(idx: int, p: float, i: float, d: float):
    cmd = 0x01
    data = []
    data.append(idx)
    v = float2bytes(p)
    for i in range(4):
        data.append(v[i])

    v = float2bytes(i)
    for i in range(4):
        data.append(v[i])

    v = float2bytes(d)
    for i in range(4):
        data.append(v[i])

    return make_protocol(cmd, data)





if __name__ == '__main__':
    # v = float2bytes(3.0)
    # for p in v:
    #     print("0x{:02x}".format(p), end=' ')
    #
    # print("")
    protocol = make_pid_protocl(0, 3.0, 1.0, 2.0)
    for p in protocol:
        print("0x{:02x}".format(p), end=' ')
    print("")


    #ser.write("hello".encode())
    

    # for i in protocol:
    #     ser.write(bytearray(i))
    #     time.sleep(0.01)

    time.sleep(10)
