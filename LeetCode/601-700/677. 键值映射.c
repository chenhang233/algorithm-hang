#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

#define En 26

typedef struct MapSum
{
    struct MapSum *children[En];
    struct MapSum *parent;
    int val;
    int childVal;
} MapSum;

MapSum *mapSumCreate2(struct MapSum *parent)
{
    MapSum *m = malloc(sizeof(MapSum));
    memset(m->children, 0, sizeof(m->children));
    m->val = 0;
    m->childVal = 0;
    m->parent = parent;
    return m;
}

MapSum *mapSumCreate()
{
    return mapSumCreate2(NULL);
}

void pAdd(MapSum *obj, int val)
{
    if (!obj)
        return;
    obj->childVal += val;
    pAdd(obj->parent, val);
}

void mapSumInsert(MapSum *obj, char *key, int val)
{
    int n = strlen(key);
    for (int i = 0; i < n; i++)
    {
        int c = key[i] - 'a';
        if (!obj->children[c])
        {
            obj->children[c] = mapSumCreate2(obj);
        }
        obj = obj->children[c];
    }
    pAdd(obj->parent, obj->val ? val - obj->val : val);
    obj->val = val;
}

int mapSumSum(MapSum *obj, char *prefix)
{
    int n = strlen(prefix);
    for (int i = 0; i < n; i++)
    {
        int c = prefix[i] - 'a';
        if (!obj->children[c])
        {
            return 0;
        }
        obj = obj->children[c];
    }
    // printf("obj=%d ,%d\n", obj->childVal, obj->val);
    return obj->val + obj->childVal;
}

void mapSumFree(MapSum *obj)
{
    for (int i = 0; i < En; i++)
    {
        MapSum *m = obj->children[i];
        if (m)
        {
            mapSumFree(obj->children[i]);
        }
    }
    free(obj);
}

/**
 * Your MapSum struct will be instantiated and called as such:
 * MapSum* obj = mapSumCreate();
 * mapSumInsert(obj, key, val);

 * int param_2 = mapSumSum(obj, prefix);

 * mapSumFree(obj);
*/

int main(int argc, char const *argv[])
{
    MapSum *obj = mapSumCreate(NULL);
    mapSumInsert(obj, "apple", 3);
    mapSumInsert(obj, "app", 2);
    mapSumInsert(obj, "apple", 2);
    int param_2 = mapSumSum(obj, "ap");
    printf("param_2=%d\n", param_2);
    return 0;
}

// ["MapSum","insert","sum","insert","insert","sum"]
// [[],["apple",3],["ap"],["app",2],["apple",2],["ap"]]

// ["MapSum","insert","sum","insert","sum"]
// [[],["apple",3],["ap"],["app",2],["ap"]]
