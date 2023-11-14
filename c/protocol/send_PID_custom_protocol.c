#include <stdio.h>
#include <stdlib.h>
#define uint8_t unsigned char
#define uint16_t unsigned short int
#define uint32_t unsigned int

#define head 0x7a
#define tail 0x7b

struct cmd
{
    uint32_t len;
    uint8_t *p;
};

struct cmd *make_protocol(uint8_t cmd, uint8_t *data, int data_len)
{
    uint32_t res_len = 5 + data_len;
    uint8_t *d = malloc(sizeof(uint8_t) * res_len);
    int j = 0;
    uint16_t check = 0;
    d[j++] = head;
    d[j++] = cmd;
    check = cmd + data_len;
    d[j++] = data_len;
    for (int i = 0; i < data_len; i++)
    {
        d[j++] = data[i];
        check += data[i];
    }
    uint8_t check_res = (check >> 8) & 0xFF;
    d[j++] = check_res;
    d[j++] = tail;
    struct cmd *c = malloc(sizeof(struct cmd));
    c->len = res_len;
    c->p = d;
    return c;
}

void make_pid_protocl(uint8_t id, float P, float I, float D)
{
    uint8_t cmd = 0x01;
    int data_len = 13;
    uint8_t data[data_len];
    int j = 0;
    data[j++] = id;
    for (int i = 0; i < 4; i++)
    {
        data[j++] = ((uint8_t *)&P)[i];
    }
    for (int i = 0; i < 4; i++)
    {
        data[j++] = ((uint8_t *)&I)[i];
    }
    for (int i = 0; i < 4; i++)
    {
        data[j++] = ((uint8_t *)&D)[i];
    }
    struct cmd *c;
    c = make_protocol(cmd, data, data_len);
    for (int i = 0; i < c->len; i++)
    {
        printf("0x%02x ", c->p[i]);
    }
    printf("\n");
}

int main(int argc, char const *argv[])
{
    make_pid_protocl(0, 3.0, 1.0, 2.0);
    return 0;
}
