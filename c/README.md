#                             				x86汇编

## 1. 基本概念

#### 1.1 为什么学?

```
	汇编可以精细化控制机器码.
	学习汇编对计算机硬件、操作系统和应用程序之间的交互有更全面，更底层的理解.
```

#### 1.2 虚拟机概念

```
	操作计算机硬件的软件,从底层的数字逻辑(分层L0)到指令架构集(机器语言 L1)到汇编(分层L2)再到高级语言(L3). 每一层都是封装,都是对下一层的描述,虚拟机的概念就是抽象封装出来的上层架构.
```

#### 1.3 数据表示

##### 1.3.1  二进制整数 

```visual basic
	二进制用2个数字作为基础,0和1.位从右往左，左边位称为最高有效位(Most Significant Bit MSB),右边位称为最低有效位(least significant bit LSB)
	二进制整数分为有符号和无符号,有符号分为正数和负数,无符号默认是正数.
```

##### 1.3.2  二进制加法

```visual basic
	从低位到高位,按位加.
```

##### 1.3.3 整数存储大小

```visual basic
	x86中,数据基本存储单位是字节(byte),一字节有8位.
	字(2 byte) 双字(4 byte) 四字(8 byte) 八字(16 byte)
```

##### 13.6 有符号二进制整数

```visual basic
	在x86中MSB表示符号位,0正数,1负数.负数用补码表示(原码取反得到反码,反码加一得到补码  补码取反加一得到原码)
	有符号二进制转十进制:
	如果最高位是1,说明存的是补码,补码取反加一得到原码.按无符号整数进行求十进制.如果最高位是0,直接求十进制.
	例:  有符号   1111 0000  (-16)
		  取反   0000 1111
		  加一   0001 0000
		  转换   16
		  结果   -16
```

##### 1.3.8 字符存储

```visual basic
	计算机使用字符集,主流 unicode标准  UTF-8(把Unicode编码转化为“可变长编码”的UTF-8编码) ASCII
	unicode和ascii的区别:
		1、ASCII编码是1个字节，而Unicode编码通常是2个字节。
		2、ASCII是单字节编码，无法用来表示中文；而Unicode可以表示所有语言。
		3、用Unicode编码比ASCII编码需要多一倍的存储空间。
```

#### 1.4 布尔表达式

```
	布尔代数l定义一组操作 值为真(true)假(false)
		非 NOT !
		或 OR  ||
		与 AND &&
```

## 2.x86处理器架构

#### 1.基础设计

```jsx
	中央处理器CPU 进行算术和逻辑操作
	包含有限数量的存储位置: 
		寄存器(register) 寄存器是CPU内部用来存放数据的一些小型存储区域，用来暂时存放参与运算的数据和运算结果
        高频时钟(clock) 对cpu内部操作与系统其他组件同步
        控制单元(CU control unit) 控制机器指令步骤顺序
        算术逻辑单元(ALU arithmetic logic unit) 执行算术(加减)和逻辑(与或非)
	CPU通过主板的CPU插座引脚和其他部分相连.引脚连接数据总线、控制总线、地址总线.
	
	内存单元(memory storage unit) 用于程序运行时保存数据和指令,和cpu交互传输(把程序复制到cpu,从cpu复制到内存).
	
	总线(bus) 一组并行线,将数据从计算机一个部分传到另一个部分,总线分为四类.
		数据总线(data bus) 在CPU和内存之间传输数据和指令.
		I/O总线(input/output bus) 在CPU和系统输入/输出设备之间传输数据.
		控制总线(control bus) 用二进制信号对连接在系统总线上的设备同步.
		地址总线(address bus) 指令在CPU和内存之间传输数据时,地址总线保持指令和数据的地址.
	为什么从内存读数据比从寄存器读慢?
		内存读步骤:
			1.将想读的值地址放到地址总线.
			2.设置处理器读取引脚.
			3.等待一个时钟周期给存储芯片反应.
			4.将数据从数据总线复制到目标.
		大概需要4个时钟周期,从寄存器取只需要1个时钟周期.
		
    加载执行
    	需要程序加载器将程序加载到内存.加载后,操作系统将CPU指向程序入口.
```

#### 2.  32位x86处理器

##### 2.1 x86处理器操作模式:

```

		保护模式(protected mode) 处理器的原生状态,所有指令和特性可用.分配给程序的独立内存空间称为段,处理器会阻止程序访问自身段之外的内存.
		虚拟8086模式(virtual- 8086 mode) 虚拟8086模式是为了在保护模式下兼容8086程序而设置的,实际上这是一种实模式与保护模式的混合.
		实地址模式(real address mode) 早期intel处理器编程环境,可以切换到其他模式.当程序需要直接访问系统内存和硬件使用.
		系统管理模式(system management mode) 向操作系统提供电源管理和系统安全机制.这些功能由制造商提供.
	
	执行环境:
		1.地址空间
			在32位保护模式下,一个程序最大寻址空间是4GB.使用扩展物理寻址(extended physical addressing)可以使被寻址空间增加到64GB. 实地址模式只能寻址1MB,如果在保护模式下运行多个虚拟8086,每个程序只能拥有自己的1MB.
		
```

##### 2.2 执行寄存器 

```
	通用寄存器 用于算术运算和数据传输.
		EAX 扩展累加寄存器(extended accumulator) 乘除默认使用
		ECX 为循环计数器 CPU 默认使用
		ESP 扩展堆栈指针寄存器(extended stack pointer) 用于寻址堆栈
		ESI 扩展源变址寄存器(extended source index) EDI 扩展目的寄存器(extended destination index) 用于高速存储器传输指令 
```

| 32位 | 16位 | 8位(高) | 8位(低) |
| :--: | :--: | :-----: | :-----: |
| EAX  |  AX  |   AH    |   AL    |
| EBX  |  BX  |   BH    |   BL    |
| ECX  |  CX  |   CH    |   CL    |
| EDX  |  DX  |   DH    |   DL    |

| 32位 | 16位 |
| :--: | :--: |
| ESI  |  SI  |
| EDI  |  DI  |
| EBP  |  BP  |
| ESP  |  SP  |



```
	段寄存器 
		实地址模式中, 16位段寄存器表示预先分配的内存区域的基址,这个区域称为段.保护模式中,段寄存器存放段描述符表指针.一些段存放指令,其他段存放数据,还有一个堆栈段存放局部函数变量和函数参数.
	指令指针寄存器  
		EIP 存下一条要执行的指令地址.可以控制EIP,使程序分支转到一个新位置.
	EFLAGS (或者Flags) 寄存器 
		包含独立二进制位,控制CPU操作,或者反应CPU操作结果.设置标志位 =1 清除 =0 .
		控制标志位
    		控制CPU操作,使CPU进入中断,侦测到算术溢出时中断执行.进入虚拟8086模式,保护模式.
    	状态标志位
 			反应CPU执行的算术和逻辑操作结果.(溢出位 OF、符号位 SF、零标志位 ZF、辅助进位标志位 AC、奇偶标志位 PF、进位标志位 CF)
```

##### 2.3 MMX寄存器

```
	8个64位MMX寄存器称为SIMD流扩展指令.
```

##### 2.4 XMM寄存器

```
	x86包括8个128位XMM寄存器,用于流扩展指令集.
	浮点单元(FPU floating-poin unit)执行浮点运算.
```



#### 3. 64位 x86-64 处理器

##### 3.1 特征

- 向后兼容x86指令集 	
- 地址长度64位,虚拟地址空间2的64次方字节
-  可以使用64位通用寄存器
-  比x86多8个通用寄存器
- 物理地址48位,支持256TB RAM

##### 3.2 64位操作模式

```
	1.兼容模式
		兼容32位16位程序
	2.64位模式
		使用64位线性地址空间的应用程序.
```

##### 3.3 通用寄存器

```
	64位默认操作32位. 指令加上REX(寄存器扩展)前缀后,操作数达到64位.
```

| 操作数大小 |                          可用寄存器                          |
| :--------: | :----------------------------------------------------------: |
|    8位     | AL BL CL DL DIL SIL BPL SPL R8L R9L R10L R11L R12L R13L R14L R15L |
|    16位    | AX BX CX DX DI SI BP SP R8W R9W R10W R11W R12W R13W R14W R15W |
|    32位    | EAX EBX ECX EDX EDI ESI EBP ESP R8D R9D R10D R11D R12D R13D R14D R15D |
|    64位    |  RAX RDX RCX RDX RDI RSI RBP R8 R9 R10 R11 R12 R13 R14 R15   |

##### 3.4 X86计算机组件

```c
	微型计算机的心脏是主板,主板上有CPU、支持处理器、主存、输入和输出接口、电源接口和扩展插槽.
	PC中使用的基本存储器: ROM EPROM 动态RAM 静态RAM 视频RAM 和CMOS ROM.
	与虚拟机相似.输入和输出通过不同层次访问实现.库函数调操作系统,操作系统调BIOS(基本输入输出系统),BIOS与硬件设备通信.
	
	BIOS(Basic Input Output System)概念
		专门负责系统硬件各种参数设定，本质上是“程序”，也就是一组“代码”
```

## 3.汇编语言基础

#### 1. 基本语言元素

```c
汇编程序

COMMENT #
	注释区
#
 
.386 ; 表示32位程序,能访问32位寄存器和地址
.model flat,stdcall ;程序内存模式(flat 保护模式) 子程序调用规范(stdcall)
.stack 4096 ; 为运行时堆栈保留4096字节空间
ExitProcess PROTO, dwExitCode: DWORD ;windows服务,调用   DWORD(32位无符号整数)

.data ;数据区
f1 DWORD 1;
f2 DWORD 2;
f3 DWORD 3;
sum DWORD 0 ;定义变量0

.code ;代码区
main PROC
 mov eax,f1;
 add eax,f2;
 add eax,f3;
 mov sum,eax;

 INVOKE ExitProcess,0
main ENDP ;标记一个过程结束
END main ;标记程序结束
```

```c
整数常量:
	26;十进制  26d;十进制  11010b;二进制  42q;八进制  42o;八进制  1Ah;十六进制 0A3h;十六进制 (字母开头十六进制加前缀0,防止汇编器解析为标识符)

浮点数常量:
	2.	+3.0	-44.2E+05	26.E5
 
字符串常量:
	"this is 'a' test"

指令:
 [标号:(可选)] 指令助记符 [操作数(通常必需)] [;注释(可选）)]
    标号: 指令和数据的标识位置,表示指令或变量的地址.(用做跳转和循环指令的目标)
         target:
			mov ax,bx
            jmp target
         L1: mov ax,bx
         L2:
	指令助记符: 标记一个指令的短单词
        mov 传送数值	add 两数相加	sub 从一个数中减去另一个数		mul 两数相乘	jmp 跳转到新位置		call 调用一个子程序

	操作数: 指令输入输出的数值(操作 内存数 寄存器 整数表达式 输入输出端口) 

NOP(空操作)指令: 占一个字节,无操作(代码对齐 x86 从双字的偶数倍地址处加载代码和数据,更快)       
	
	
```



#### 2.  汇编、链接和运行程序

##### 2.1. 执行周期

```
汇编源文件 -汇编器-> 目标文件(可能和列表文件) -链接器(复制被请求的链接库到目标文件)-> 可执行文件 -OS加载器(操作系统把程序加载到内存,使CPU分支到程序起始地址)-> 输出
列表文件: 程序源文件副本,数字地址,16进制机器代码
```



#### 3.  定义数据

#####  3.1 数据定义语句

```
在内存中为变量留出存储空间,赋予名字
初始值: 可以用 ? 不对变量初始化
多初始值: 标号只指出第一个初始值的偏移量
	list BYTE 10,20,30    偏移: 0000,0001,0002
字符串: greeting BYTE "hello world",0 (空字节结束)
```

|  类型  |              用法               |
| :----: | :-----------------------------: |
|  BYTE  |     8位无符号整数.B代表字节     |
| SBYTE  |    8位有符号整数,S代表有符号    |
|  WORD  |         16位无符号整数          |
| SWORD  |         16位有符号整数          |
| DWORD  |    32位无符号整数,D代表双字     |
| SDWORD | 32位有符号整数,SD代表有符号双字 |
| FWORD  |    48位整数(保护模式远指针)     |
| QWORD  |        64位整数,Q代表4字        |
| TBYTE  |  80位(10字节)整数,T代表10字节   |
| REAL4  |      32位(4字节)IEEE短实数      |
| REAL8  |      64位(8字节)IEEE长实数      |
| REAL10 |    80位(10字节)IEEE扩展实数     |

##### 3.2 DUP操作符

```
使用一个整数表达式作为计数器,为多个数据项分配存储空间.可以初始化和非初始化
	BYTE 20 DUP(0) ;20字节,值都为0
	BYTE 20 DUP(?) ;20字节,非初始化
	BYTE 4 DUP("STACK") ;20字节

16位字数组 
	myList WORD 1,2,3,4,5 ;假设起始偏移0,地址增量 2个字节(1字)
使用DUP分配数组
	array WORD 5 DUP(?) ;5个数值,未初始化
```

##### 3.3 小端顺序

```
x86处理器在内存中按小端顺序(低到高)存放检索数据.
.DATA ? 伪指令声明未初始化数据(可以减少编译程序大小)
	.data ?
	array DWORD 5000 DUP(?) ;20000字节,未初始化
	
	.data 
	array DWORD 5000 DUP(?) ;20000字节,初始化,程序会多出20000字节
```



#### 4.  符号常量

##### 4.1  等号伪指令

```
把一个符号名称和一个表达式相连
	name = expression
	COUNT = 500

当前地址计数器 $
	selfPtr DWORD $
计算数组字符串大小
	list BYTE 10,20,30
	listSize = ($ - list)
非字节
	lsit2 WORD 100h,101h,110h
	list2Size = ($ - list2) / 2
```

##### 4.2  EQU伪指令

```c
把一个符号名称和一个整数表达式或文本连接,格式:
	name EQU expression
	name EQU symbol(已存在符号名称)
	name EQU <text>

10*10元素矩阵
	matrix1 EQU 10*10
	matrix2 EQU <10 * 10>
	.data
	M1 WORD matrix1
    M2 WORD matrix2   
    COMMENT #
	M1计算表达式得到 M1 WORD 100
	M2文本直接复制 M2 WORD 10 * 10
	#
```

##### 4.3 TEXTEQU伪指令

```
文本宏,格式:
	name TEXTEQU <text>
	name TEXTEQU textmacro(已有文本宏内容)
	name TEXTEQU %constExpr(整数常量表达式)
	
例子:
	msg TEXTEQU <"do you wish to continue ?">
	.data
	prompt BYTE msg
	
	rowSize = 5
	count TEXTEQU %(rowSize * 2)
	move TEXTEQU <mov>
	setupAL TEXTEQU <move al,count>
	; 得到结果 mov al, 10
```



#### 5.  64位编程

##### 5.1 汇编文件名称.asm

```c
.data
 
    msgCaption  db 'Message box text',0
 
.code 
align 16
 
extern GetMsgBoxType : proc
extern MessageBoxA : proc
extern __imp_MessageBoxA : qword
 
 
asm_func proc
    ; RCX = address for the string for the message box
    sub     rsp, 28h        ; shadow stack only [n]8 size
     
    lea     rdx, [msgCaption]
    mov     r8, rcx
 
    call    GetMsgBoxType
    mov     r9, rax
    xor     rcx, rcx
     
    ;call   [__imp_MessageBoxA]
    call MessageBoxA
 
    add     rsp, 28h        ; restoring shadow stack
    ret
asm_func endp
 
end
```

##### 5.2 main.c

```c
#include <Windows.h>

extern "C" void  __stdcall asm_func(const char* lpText);

extern "C" UINT GetMsgBoxType()
{
    return MB_YESNOCANCEL;
}

int main()
{
    asm_func("Hello world!");
    return 0;
}
```

## 4. 数据传送、寻址和算术运算

#### 4.1 数据传送指令

##### 4.1.1 MOV指令 

```
将源操作数复制到目的操作数
	MOV destination,source
	
	.data
	var1 WORD ?
	.code
	MOV ax,var1
规则:
	1.两个操作数必需同样大小
	2.两个操作数不能同时为内存操作数
	3.指令指针寄存器(IP、EIP、RIP)不能作为目标操作数

覆盖值:
	.data
	by1 BYTE 78h
	word1 WORD 1234h
	dword1 DWORD 12345678h
	.code
	MOV eax,0 ; 	EAX = 00000000h
	MOV al,by1; 	EAX = 00000078h
	MOV ax,word1; 	EAX = 00001234h;
	MOV eax,dword1; EAX = 12345678h;
	mov ax,0		EAX = 12340000h;
```

##### 4.1.2 MOVZX指令

```
将源操作数复制到目的操作数(全零扩展,把目标操作数的0扩展16位,32位)
	MOV bx,0A69Bh 		;EAX = 0000A69Bh
	MOVZX eax,bx		;EAX = 0000A69Bh
	MOVZX edx,bl		;EDX = 0000009bh
    MOVZX cx,bl			;CX  = 009bh
```

##### 4.1.3 MOVSX指令

```
将源操作数复制到目的操作数(全零扩展,把目标操作数的1扩展16位,32位)
	MOV bx,0A69Bh 	;前面加0,防止汇编器把常数当标识符
	MOVSX eax,bx	;EAX = FFFFA69Bh
	MOVSX edx,bl	;EDX = FFFFFF9Bh
	MOVSX cx,bl		;CX = FF9Bh
```

##### 4.1.4 LAHF和SAHF指令

```
LAHF(加载状态标志位到AH) 将EFLAGS寄存器低字节复制到AH
.data
save BYTE ?
.code
LAHF		;将标志位加载到AH
MOV save,ah	;存到变量

SAHF(保存AH内容到状态标志位)将AH内容复制到EFLAGS寄存器低字节
MOV ah,save;加载到ah
SAHF	   ;复制到eflags寄存器
```

##### 4.1.5 XCHG指令

```
交换两个操作数内容(交换数据)
	XCHG ax,bx	;交换16位寄存器内容
	XCHG ah,ak  ;交换8位寄存器内容
交换两个内存操作室:
	MOV ax,val1
	XCHG ax,val2;
	MOV val1,ax;
```

##### 4.1.6 偏移量操作数

```
变量偏移量加上常数形成有效地址(加一代表1个字节)
array BYTE 10h,20h,30h,40h,50h
MOV al,array 	;al=10h
MOV al,[array+1];al = 20h

在16位的字数组中,每个数组元素偏移量比前一个多2个字节(16位)
	.data
	arr WORD 100h,200h
	.code
	MOV ax,arr	;ax=100h
	MOV ax,[arr + 2];ax = 200h
如果是双字数组,DWORD 4字节(32位) 加4才能走一个元素
```



#### 4.2 加减法

##### 4.2.1 INC和DEC指令

```
INC(增加) DEC(减少) 指令分别改变寄存器或内存操作数加一减一.(不会影响进位标志位)
	.data
	myw WORD 1000h
	.code
	INC myw		;myw = 1001h
	MOV bx,myw  
    DEC bx		;bx = 1000h
 
```

##### 4.2.2 ADD指令

```
将长度相同的源操作数和目的操作数相加,和存放目标操作室.
	.data
	var1 WORD 1000h;
	var2 WORD 2000h;
	.code
	MOV eax,var1	; eax 1000h
	ADD eax,var2	; eax 3000h
```

##### 4.2.3 SUB指令

```
从目的操作数减去源操作数.
	.data
	var1 WORD 1000h;
	var2 WORD 2000h;
	.code
	MOV eax,var2	; eax 2000h
	SUB eax,var1	; eax 1000h
```

##### 4.2.4 NEG 指令

```
把操作数转换为其二进制补码,将符号取反
	NEG 同样寄存器
	NEG 内存操作数
```

##### 4.2.5 练习

```
翻译 r1 = -r2 + (r3 - r4);
	r1 SDWORD ?
	r2 SDWORD 26
	r3 SDWORD 20
	r4 SDWORD 15
	.code
	MOV eax,r2	
	NEG	eax		;-26
	MOV ebx,r3
	SUB ebx,r4	;ebx=5
    ADD eax,ebx ;eax=-21
    MOV r1,eax
```



#### 4.3 数据相关的运算符和伪指令

```
运算符和伪指令由汇编器解析.
```

##### 4.3.1 OFFSET 运算符

```
返回一个变量与其所在段起始地址之间的距离
	.data
	bval BYTE ?
	wval WORD ?
	dval DWORD ?
	dval2 DWORD ?
	.code ; 假设bval偏移量为 0040 4000 h
	mov esi,OFFSET bval		;esi=0040 4000h
	mov esi,OFFSET wval		;esi=0040 4001h
	mov esi,OFFSET dval		;esi=0040 4003h
	mov esi,OFFSET dval2	;esi=0040 4007h
	
用于直接偏移量
	.data
	arr WORD 1,2,3,4,5
	.code
	mov esi,OFFSET arr + 4	;esi存的是3的地址
```

##### 4.3.1.2 ALIGN 伪指令

```
将一个变量对齐到字节边界、字边界、双字边界或段落边界
	ALING bound 
bound取值
	1: 下一个变量对齐1字节边界(默认)
	2: 下一个变量对齐于偶数地址
	4: 下一个变量对齐于4的倍数
	8: 下一个变量对齐于8的倍数
	16:下一个变量对齐于16的倍数
```

##### 4.3.2 PTR 运算符

```
重写操作数默认大小类型
将较小值送人较大目的操作数:
	.data 
	wordList WORD 5678h,1234h
	.code
	mov eax,DWORD PTR wordList ;小端存储格式从低地址到高地址 eax= 12345678jh
```

##### 4.3.3 TYPE 运算符

```
返回一个操作数或数组中每个元素大小(字节计)
TYPE BYTE 1
TYPE WORD 2
TYPE DWORD 4
TYPE QWORD 8
```

##### 4.3.4 LENGHTOF 运算符

```
返回数组中元素个数,如果数组嵌套返回乘积
	.data
    by1 BYTE 10,20,30
    arr WORD 30 DUP(?),0,0
    arr2 WORD 5 DUP(3 DUP(?))
    LENGHTOF by1	;3
    LENGHTOF arr	;32
    LENGHTOF arr2	;15
```

##### 4.3.5 SIZEOF 运算符

```
返回数组初始化时使用的字节数(LENGHTOF和TYPE的乘积)
	.data
	arr WORD 32 DUP(0)
	.code
	mov eax,SIZEOF arr 	;eax=32*2=64
```

##### 4.3.6 LABEL 伪指令

```
用不同大小类型重新定义同一个变量
	.data
	val1 LABEL WORD
	val2 DWORD 12345678h
	.code
	mov ax,val1		;ax=5678h
	mov dx,[val1+2]	;dx=1234h
val1和val2共享同一内存位置,LABEL指令不分配内存
```



#### 4.4 间接寻址

```
使用寄存器作为指针(间接寻址)并控制该寄存器的值.如果一个操作数使用的是间接寻址,就称为间接操作数.
```

##### 4.4.1 间接操作数[]

```
保护模式 
	任何一个32位通用寄存器加上[]括号就构成一个间接操作数,寄存器存的是数据地址.
	.data
	val BYTE 10h
	.code
	mov esi,OFFSET val
	mov al,[esi]	;al=10h
和PTR一起使用
	inc BYTE PTR [esi] ;告诉汇编器esi指向的值大小
数组使用
	.data
	arr BYTE 10h,20h
	.code
	mov esi,OFFSET arr
    mov al,[esi]	;al=10h
    INC esi
    mov al,[esi]	;al=20h
```

##### 4.4.2 指针

```
如果一个变量包含另一个变量的地址,称该变量为指针.指针包含的地址在运行时可以修改,可以使用系统调用分配一个内存块,再把这个块的地址保存在一个变量
	arr1 BYTE 10h,20h,30h,40h
	ptr1 DWORD OFFSET arr1;
```

##### 4.4.3 TYPEDEF 运算符

```
创建用户定义类型,用于创建指针.
	BTYPE TYPEDEF PTR BYTE	;一个字节指针
	.data
    arr BYTE 10h,20h,30h
	ptr1 PBYTE ?	;未初始化
	ptr2 PBYTE arr	;指向数组
```

#### 4.5 JMP和LOOP指令

##### 4.5.1 JMP

```
无条件跳转到目标地址
	top:
	...
	jmp top	; 循环
```

##### 4.5.2 LOOP

```
按照ECX计数器循环,每循环一次ECX值减一
	mov	exc,5
	mov ax,0
L1:
	inc ax
	loop L1
嵌套循环:
	把外层循环的计数器ECX保存到变量
	.data
	count DWORD ?
	.code
	mov ecx,100		;外层计数器
	L1:
		mov count,ecx
		mov ecx,20
	L2:
	...
	loop L2
	mov ecx,count	;恢复外层计数值
	loop L1
```



## 5. 过程

##### 5.1 堆栈

###### 5.1.1 运行时堆栈(runtime stack)

```
	是内存数组,CPU用ESP(extended stack pointer 扩展堆栈指针)寄存器对其直接管理.运行时堆栈在内存中向下生长,从高地址向低地址扩展.
```

###### 5.1.2 PUSH和POP指令

```
PUSH 减少ESP的值,将源操作数复制到堆栈
POP 把ESP指向的堆栈元素内容复制到一个16位或者32位操作数,再增加ESP的值.
```

###### 5.1.3 PUSHFD和POPFD指令

```
PUSHFD 32位EFLAGS寄存器内容入栈
POPFD  栈顶单元内容弹出到EFLAGS寄存器
```

###### 5.1.4 PUSHAD 、PUSHA、PUSHA、POPA

```
PUSHAD 按EAX、ECX、EDX、EBX、ESP、EBP、ESI、EDI顺序,将所有32位通用寄存器入栈
POPAD  按相反顺序将寄存器弹出堆栈
PUSHA  按AX、CX、DX、BX、SP、BP、SI、DI顺序将16位通用寄存器入栈.
POPA   按相反顺序将寄存器弹出堆栈
```

###### 5.1.5 字符串反转

```
.386 ; 表示32位程序,能访问32位寄存器和地址
.model flat,stdcall ;程序内存模式(flat 保护模式) 子程序调用规范(stdcall)
.stack 4096 ; 为运行时堆栈保留4096字节空间
ExitProcess PROTO, dwExitCode: DWORD ;windows服务,调用   DWORD(32位无符号整数)
.data
	aName BYTE "hello world",0
	nameSize = ($ - aName) - 1
.code
main PROC
; 将名字入栈
	mov ecx,nameSize	
	mov esi,0

L1:
	movzx eax,aName[esi]
	push eax
	inc esi
	loop L1
; 将名字逆序弹出栈,存入aName
	mov ecx,nameSize
	mov esi,0
L2:
	pop eax    			;获取字符
	mov aName[esi],al 	;存入字符
	inc esi
	loop L2
 INVOKE ExitProcess,0
main ENDP ;标记一个过程结束
END main ;标记程序结束

```

##### 5.2 定义和使用过程

###### 5.2.1 PROC 伪指令

```
定义过程
	main PROC
	...
	main ENDP
在程序启动过程之外创建一个过程时,通过ret指令强制CPU返回到该过程被调用的位置
```

###### 5.2.2 CALL和RET 指令

```
CALL调用一个过程,处理器从新内存地址开始执行.
调用和返回:
	1.call指令将返回地址(call的下一条指令地址)入栈
	2.被调用过程地址复制到指令指针寄存器(EIP)
	3.当过程准备返回,RET指令从堆栈把返回地址弹出到EIP(32位 EIP 16位 IP)
```

###### 5.2.3 USES 运算符

```
USES和PROC一起使用,列出要修改寄存器名.代替PUSH和POP做的事.
	arraySum PROC USES esi ecx
		mov eax,0
	L1:
	add eax,[esi]
	add esi,TYPE DWORD
	loop L1
	ret
	arraySum ENDP
	
	等同于:-------------
	
	arraySum PROC 
	push esi
    push ecx
		mov eax,0
	L1:
	add eax,[esi]
	add esi,TYPE DWORD
	loop L1
	pop ecx
	pop esi
	ret
	arraySum ENDP
```

##### 5.3 链接到外部库

```
链接库是已经汇编为机器码的过程(子程序)
链接器工具把一个程序目标文件与一个或多个目标文件以及链接库组合在一起
```



## 6. 条件处理

##### 6.1 布尔和比较指令

###### 6.1.1 CPU状态标志

```
	布尔指令影响 零标志位、进位标志位、符号标志位、溢出标志位、奇偶标志位.
		- 操作结果等于零,零标志位置1
		- 操作使目标操作数最高位有进位时,进位标志位置1
		- 符号标志位是目标操作数最高位副本,如果标志为1,表示负数,为0表示正数
		- 指令结果超出有符号目标操作数范围时.溢出标志位置1
		- 指令使目标操作数低字节中有偶数个1时,奇偶标志位置1
		
布尔指令先清除溢出和进位标志位,根据目标操作数的值来修改符号标志位、零标志位、奇偶标志位
```

###### 6.1.2 AND 指令

```
and destination,source
两个操作数按位逻辑与操作,结果存放在目标操作数.
```

###### 6.1.3 OR 指令

```
两个操作数按位逻辑或操作,结果存放在目标操作数.
```

###### 6.1.4 XOR 指令

```
两个操作数按位逻辑异或操作,结果存放在目标操作数.
```

###### 6.1.5 NOT 指令

```
反转操作数的所有位.(not 指令不影响标志位)
```

###### 6.1.6 TEST 指令

```
执行AND指令,不改变目标数.
```

###### 6.1.7 CMP 指令

```
执行目标操作数减源操作数的隐含操作,不修改目标操作数.
标志位: CMP指令按计算结果修改溢出、符号、零、进位、辅助进位、奇偶标志位.
```

如果比较两个无符号数

| CMP结果 | ZF(零标志位) | CF(进位标志位) |
| :-----: | :----------: | :------------: |
| 目标<源 |      0       |       1        |
| 目标>源 |      0       |       0        |
| 目标=源 |      1       |       0        |

如果比较两个有符号数

| CMP结果 | 标志位(SF符号,OF溢出) |
| :-----: | :-------------------: |
| 目标<源 |        SF!=OF         |
| 目标>源 |         SF=OF         |
| 目标=源 |         ZF=1          |

##### 6.2 条件跳转

###### 6.2.1 条件结构

```
通过比较和跳转的组合实现条件语句.
	例:
	cmp eax
	jz L1 	;如果zf=1 则跳转
L1:
 ...
```

###### 6.2.2 Jcond 指令

```
当状态标志位为真,条件跳转指令分支到目标标号.
Jcond destination
```

|  JC  |  进位跳转(进位标志位1)  |
| :--: | :---------------------: |
| JNC  | 无进位跳转(进位标志位0) |
|  JZ  |   为0跳转(零标志位1)    |
| JNZ  |   非0跳转(零标志位0)    |

###### 6.2.3 条件跳转指令类型

条件跳转指令4个类型:

- 基于特定标志位的值跳转

- 基于两数是否相等,或是否等于ECX的值跳转

- 基于无符号操作数的比较跳转

- 基于有符号操作数的比较跳转

  ​	

  ​																		**基于特定标志位的值跳转**

| 助记符 |    说明    | 标志位 |
| :----: | :--------: | :----: |
|   JZ   | 为零跳转1  |  ZF=1  |
|  JNZ   |  非零跳转  |  ZF=0  |
|   JC   |  进位跳转  |  CF=1  |
|  JNC   | 无进位跳转 |  CF=0  |
|   JO   |  溢出跳转  |  OF=1  |
|  JNO   | 无溢出跳转 |  OF=0  |
|   JS   | 有符号跳转 |  SF=1  |
|  JNS   | 无符号跳转 |  SF=0  |
|   JP   | 偶校验跳转 |  PE=1  |
|  JNP   | 奇校验跳转 |  PE=0  |

​																				**基于相等性跳转**

| 助记符 |      说明       |
| :----: | :-------------: |
|   JE   |    相等跳转     |
|  JNE   |   不相等跳转    |
|  JCXZ  |    CX=0跳转     |
| JECXZ  |    ECX=0跳转    |
| JRCXZ  | RCX=0跳转(64位) |

​																			**基于无符号数比较跳转**

| 助记符 |       说明       |
| :----: | :--------------: |
|   JA   |     大于跳转     |
|   JB   |     小于跳转     |
|  JNBE  |  不小于等于(JA)  |
|  JNAE  | 不大于或等于(JB) |
|  JAE   |   大于等于跳转   |
|  JBE   |   小于等于跳转   |
|  JNB   |   不小于(JAE)    |
|  JNA   |   不大于(JBE)    |

​																			**基于有符号数比较跳转**

| 助记符 |      说明      |
| :----: | :------------: |
|   JG   |    大于跳转    |
|   JL   |    小于跳转    |
|  JNLE  | 不小于等于(JG) |
|  JNGE  | 不大于等于(JL) |
|  JGE   |  大于等于跳转  |
|  JLE   |  小于等于跳转  |
|  JNL   |  不小于(JGE)   |
|  JNG   |  不大于(JLE)   |

##### 6.3 条件循环指令

###### 6.3.1 LOOPZ和LOOPE指令

```
LOOPZ LOOP指令加上零标志位为1跳转
LOOPE 等同于LOOPZ
```



































































