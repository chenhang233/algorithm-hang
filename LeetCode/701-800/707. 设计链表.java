public class MyLinkedList {
    class Node {
        int val;
        Node next;
        Node(int v) {
            val = v;
        }
    }
    Node head = null;
    int size = 0;
    public MyLinkedList() {
    }

    public int get(int index) {
        if (size == 0 || index < 0 || index > size) return -1;
        Node cur = head;
        while (cur != null) {
            if (index-- == 0) return  cur.val;
            cur = cur.next;
        }
        return -1;
    }

    public void addAtHead(int val) {
        Node curHead = new Node(val);
        curHead.next = head;
        head = curHead;
        addSize();
    }

    public void addAtTail(int val) {
        Node node = new Node(val);
        if (head == null) head = node;
        else {
            Node cur = head;
            while (cur.next != null) {
                cur = cur.next;
            }
            cur.next = node;
        }
        addSize();
    }

    public void addAtIndex(int index, int val) {
        if (index <= 0) {
            addAtHead(val);
        } else if (index < size) {
            Node cur = head;
            while (index-- != 1 && cur != null) {
                cur = cur.next;
            }
            Node node = new Node(val);
            Node next = cur.next;
            cur.next = node;
            node.next = next;
            addSize();
        } else if (index == size) {
            addAtTail(val);
        }
    }
    public void addSize() {
        size++;
    }
    public void delSize() {
        size--;
    }

    @Override
    public String toString() {
        return getString(head);
    }
    public String getString(Node node) {
        String next = "";
        if (node.next != null)next = getString(node.next);
        return "{" +
                "val = "+ node.val + "\n" + next;
    }

    public void deleteAtIndex(int index) {
        if (index == 0) {
            head = head.next;
        } else if (index < size) {
            Node cur = head;
            Node prev = cur;
            while (index-- != 0 && cur != null) {
                if (index == 0) prev = cur;
                cur = cur.next;
            }
            prev.next = cur.next;
            delSize();
        }
    }
}
