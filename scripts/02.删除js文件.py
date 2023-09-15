import os
import glob

# 指定要删除文件的目录
directory = '../LeetCode/1-100'
# directory = 'C:\\Users\\chenhang\\Desktop\\code\\algorithm\\LeetCode\\1-100\\'
# 使用glob模块匹配以.js结尾的文件
files = glob.glob(os.path.join(directory, '*.js'))


# 循环遍历文件列表并删除每个文件
for file in files:
    try:
        os.remove(file)
        print(f'Deleted file: {file}')
    except OSError as e:
        print(f'Error deleting file: {file} - {e}')