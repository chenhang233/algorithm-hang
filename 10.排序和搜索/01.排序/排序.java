package com.date;

public class Demo7 {
    public static void main(String[] args) {
        int[] arr = new int[]{1,5,9,4,5,1};
                            // 1 5 1 4 5 9
        int[] arr2 = new int[]{6,1,2,7,9,3,4,5,10,8};
//        selectSort(arr);
//        insertSort(arr);
//        System.out.println(rSum(100));
//        System.out.println(r2Sum(5));
        quickSort(arr,0,arr.length - 1);
        pr(arr);
    }
    public  static  void pr(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + ",");
        }
    }
    // 选择排序
    public  static void selectSort(int[] arr) {
        for (int i = 0; i < arr.length -1; i++) {
            for (int j = i + 1; j < arr.length -1; j++) {
                if (arr[i] > arr[j]) {
                    int t = arr[i];
                    arr[i] = arr[j];
                    arr[j] = t;
                }
            }
        }
    }
    // 插入排序
    public  static void insertSort(int[] arr) {
        int startIndex = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]){
                startIndex = i + 1;
                break;
            }
        }
        for (int i = startIndex; i < arr.length; i++) {
            int j = i;
            while (j >= 0 && arr[j] < arr[j - 1]) {
                int t = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = t;
                j--;
            }
        }
    }
    public  static  int rSum(int num) {
        if (num == 1 ) return  1;
        return  rSum(num  - 1) + num;
    }
    public  static  int r2Sum(int num) {
        if (num == 1) return  1;
        return  num * r2Sum(num - 1);
    }
    // 快速排序
    public static void quickSort(int[] arr, int i,int j) {
        int start = i,end = j;
        if (start > end) return;
        int baseNumber = arr[i];
        while (start != end) {
            while (true) {
                if (start >= end || arr[end] < baseNumber) break;
                end--;
            }
            while (true) {
                if (start >= end || arr[start] > baseNumber) break;
                start++;
            }
                int t = arr[end];
                arr[end] = arr[start];
                arr[start] = t;
        }
        int t = arr[i];
        arr[i] = arr[start];
        arr[start] = t;
        pr(arr);
        quickSort(arr, i, start - 1);
        quickSort(arr,start + 1, j);
    }
}
