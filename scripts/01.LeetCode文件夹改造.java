package file;

import java.io.*;
import java.util.Arrays;
import java.util.HashMap;

public class Demo6 {
    public static void main(String[] args) throws IOException {
        String url = "C:\\Users\\chenhang\\Desktop\\code\\algorithm-hang\\\\LeetCode";
        HashMap<String, File> map = new HashMap();
        map.put("1",new File(url,"1-100"));
        map.put("2",new File(url,"101-200"));
        map.put("3",new File(url,"201-300"));
        map.put("4",new File(url,"301-400"));
        map.put("5",new File(url,"401-500"));
        map.put("6",new File(url,"501-600"));
        map.put("7",new File(url,"601-700"));
        map.put("8",new File(url,"701-800"));
        map.put("9",new File(url,"801-900"));
        map.put("10",new File(url,"901-1000"));
        map.forEach((k,v) -> v.mkdirs());
        File fold = new File(url);
        File[] files = fold.listFiles();
        for (File file : files) {
            String name= file.getName();
            String[] numArr = name.split("\\.");
            if (file.isFile()) {
                int num = Integer.parseInt(numArr[0]);
                FileInputStream fis = new FileInputStream(file);
                byte[] bys = new byte[1024 * 1024];
                int len;
                File f4 = null;
                if (num <= 100) {
                    f4 = map.get("1");
                } else if (num <= 200) {
                    f4 = map.get("2");
                } else if (num <= 300) {
                    f4 = map.get("3");
                } else if (num <= 400) {
                    f4 = map.get("4");
                } else if (num <= 500) {
                    f4 = map.get("5");
                } else if (num <= 600) {
                    f4 = map.get("6");
                } else if (num <= 700) {
                    f4 = map.get("7");
                } else if (num <= 800) {
                    f4 = map.get("8");
                } else if (num <= 900) {
                    f4 = map.get("9");
                } else if (num <= 1000) {
                    f4 = map.get("10");
                }
                if (f4 != null) {
                    FileOutputStream fos = new FileOutputStream(new File(f4,name));
                    while ((len = fis.read(bys)) != -1) {
                        fos.write(bys,0,len);
                    }
                    fos.close();
                }
                fis.close();
                if (f4 != null) file.delete();
            }
        }
    }
}
