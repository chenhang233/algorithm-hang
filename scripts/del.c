#include <stdio.h>
#include <wchar.h>
#include <dirent.h>

int main(int argc, char const *argv[])
{
    const char *path = "./LeetCode/1-100";
    char buffer[256];
    int length;
    // 打开目录
    DIR *dir;
    struct dirent *entry;
    dir = opendir(path);
    if (dir == NULL)
    {
        perror("opendir");
        return 1;
    }

    // 遍历目录
    while ((entry = readdir(dir)) != NULL)
    {
        // 打印文件名
        char *name = entry->d_name;
        char *res = strstr(name, ".js");
        if (res != NULL)
        {
            wchar_t *s = name;
            int t = _wremove(s);
            printf("%s t=%d\n", name, t);
        }
    }

    // 关闭目录
    closedir(dir);
    // const wchar_t *s = L"./LeetCode/1-100/01.两数之和.js";
    // int res = _wremove(s);
    // printf("%d\n", res);
    return 0;
}
