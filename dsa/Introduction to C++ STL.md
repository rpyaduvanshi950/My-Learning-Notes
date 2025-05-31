## 🔹 **C++ STL – Why Use It?**

### ✅ **Why STL?**

The **Standard Template Library (STL)** in C++ provides **ready-made, efficient, and reusable** components that help you:

* **Write clean, short, and fast code**
* **Avoid reinventing the wheel** by using pre-built data structures and algorithms
* **Improve performance** with optimized implementations
* **Save time** in competitive programming and software development

---

## 🔹 **1. Introduction to C++ STL**

STL is a powerful set of **template classes** that offer:

* **Containers** – Store collections of data (`vector`, `map`, etc.)
* **Algorithms** – Process and manipulate data (`sort`, `find`, etc.)
* **Iterators** – Provide a way to access container elements

```cpp
#include <bits/stdc++.h>
using namespace std;
```

---

## 🔹 **2. Pair and Nested Pair**

### ✅ Use: Group two values together (useful in sorting, coordinates, graphs).

```cpp
pair<int, int> p = {1, 2};
cout << p.first << " " << p.second;

pair<int, pair<int, int>> np = {1, {2, 3}};
```

---

## 🔹 **3. Vector – Dynamic Array**

### ✅ Use: Fast random access and insertion at end. Ideal for most array-based problems.

```cpp
vector<int> v;
v.push_back(x);
v.emplace_back(x);
v.size(); v.clear(); v.empty();
v.erase(pos);
v.insert(pos, x);
v.front(); v.back();
v[i];
```

---

## 🔹 **4. Iterators**

### ✅ Use: Traverse containers like pointers.

```cpp
vector<int>::iterator it = v.begin();
it++; *it;
for (auto x : v) cout << x;
```

---

## 🔹 **5. List – Doubly Linked List**

### ✅ Use: Efficient insertions/deletions at both ends or middle. No indexing.

```cpp
list<int> ls;
ls.push_back(x);
ls.push_front(x);
ls.pop_back();
ls.sort();
```

---

## 🔹 **6. Deque – Double Ended Queue**

### ✅ Use: Insert/delete from both ends. Hybrid of vector and list.

```cpp
deque<int> dq;
dq.push_back(x); dq.push_front(x);
dq.pop_back(); dq.pop_front();
```

---

## 🔹 **7. Stack – LIFO**

### ✅ Use: Backtracking, expression evaluation.

```cpp
stack<int> st;
st.push(x); st.top(); st.pop(); st.empty();
```

---

## 🔹 **8. Queue – FIFO**

### ✅ Use: Level order traversal, task scheduling.

```cpp
queue<int> q;
q.push(x); q.front(); q.pop(); q.empty();
```

---

## 🔹 **9. Priority Queue**

### ✅ Use: Access highest or lowest priority element quickly.

```cpp
priority_queue<int> pq;  // Max-heap
pq.push(x); pq.top(); pq.pop();

priority_queue<int, vector<int>, greater<int>> minpq; // Min-heap
```

---

## 🔹 **10. Set – Sorted Unique Elements**

### ✅ Use: Store sorted elements without duplicates.

```cpp
set<int> s;
s.insert(x); s.erase(x); s.find(x);
s.lower_bound(x); s.upper_bound(x);
```

---

## 🔹 **11. Multiset – Sorted with Duplicates**

### ✅ Use: Like set, but allows duplicates.

```cpp
multiset<int> ms;
ms.insert(x);
ms.erase(ms.find(x)); // Erase one occurrence
```

---

## 🔹 **12. Unordered Set – Fast Hash Set**

### ✅ Use: Store unique elements with average O(1) operations.

```cpp
unordered_set<int> us;
us.insert(x); us.find(x); us.count(x);
```

---

## 🔹 **13. Map – Key-Value Store (Ordered)**

### ✅ Use: Associative array, sorted by key.

```cpp
map<string, int> mp;
mp["a"] = 1;
mp.insert({"b", 2});
mp.erase("a");
mp.find("b");
```

---

## 🔹 **14. Unordered Map – Hash-Based Map**

### ✅ Use: Faster alternative to map, keys not sorted.

```cpp
unordered_map<string, int> ump;
ump["a"] = 10;
ump.find("a"); ump.erase("a");
```

---

## 🔹 **15. Algorithms**

### ✅ Use: Predefined efficient operations on containers.

```cpp
sort(v.begin(), v.end());
reverse(v.begin(), v.end());
max_element(v.begin(), v.end());
min_element(v.begin(), v.end());
accumulate(v.begin(), v.end(), 0);
count(v.begin(), v.end(), x);
find(v.begin(), v.end(), x);
binary_search(v.begin(), v.end(), x);
```

---

## 🔹 **16. Custom Sorting with Comparator**

### ✅ Use: Define custom sorting logic.

```cpp
bool comp(pair<int,int> a, pair<int,int> b){
    if (a.second == b.second)
        return a.first > b.first;
    return a.second < b.second;
}
sort(v.begin(), v.end(), comp);
```

---

## 🔹 **17. Bit Manipulation**

### ✅ Use: Optimize performance using bit-level hacks.

```cpp
int n = 7; // 0111
__builtin_popcount(n); // Count set bits
```

---

## 🔹 **18. Next Permutation**

### ✅ Use: Generate next lexicographical permutation.

```cpp
string s = "123";
sort(s.begin(), s.end());
do {
    cout << s << "\n";
} while (next_permutation(s.begin(), s.end()));
```

---

## 🔹 **19. Common STL Time Complexities**

| Operation                | Complexity           |
| ------------------------ | -------------------- |
| `vector.push_back()`     | O(1) (Amortized)     |
| `set/map.insert()`       | O(log n)             |
| `unordered_set.insert()` | O(1) Avg, O(n) Worst |
| `priority_queue.push()`  | O(log n)             |
| `sort()`                 | O(n log n)           |
| `find()` (vector)        | O(n)                 |

