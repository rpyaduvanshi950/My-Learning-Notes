

## 🔹 **1. Introduction to C++ STL**

The **Standard Template Library (STL)** is a powerful set of C++ template classes to provide common data structures and functions:

* **Containers** – Store collections of data (`vector`, `list`, `map`, etc.)
* **Algorithms** – Functions to process data (`sort`, `binary_search`, etc.)
* **Iterators** – Used to access elements in containers

```cpp
#include <bits/stdc++.h>
using namespace std;
```

---

## 🔹 **2. Pair and Nested Pair**

### 🔧 What is it?

Stores two heterogeneous objects as a single unit.

### ✅ Syntax and Functions:

```cpp
pair<int, int> p = {1, 2};
cout << p.first << " " << p.second;

pair<int, pair<int, int>> np = {1, {2, 3}};
```

---

## 🔹 **3. Vector – Dynamic Array**

### 🔧 What is it?

Resizes automatically. Fast access & insertion at the end.

### ✅ Common Functions:

```cpp
vector<int> v;
v.push_back(x);      // Add at end
v.emplace_back(x);   // Faster insertion
v.size();            // Number of elements
v.clear();           // Remove all
v.empty();           // Is empty?
v.erase(pos);        // Remove at pos
v.insert(pos, x);    // Insert at pos
v.front();           // First element
v.back();            // Last element
v[i];                // Access element
```

---

## 🔹 **4. Iterators**

### 🔧 What is it?

Pointer-like objects to traverse containers.

### ✅ Syntax:

```cpp
vector<int>::iterator it = v.begin();
it++; *it;           // Dereferencing
v.begin(), v.end();  // Start, end

for (auto x : v) cout << x; // Range-based
```

---

## 🔹 **5. List – Doubly Linked List**

### 🔧 What is it?

Efficient insertions/deletions anywhere, but no indexing.

### ✅ Functions:

```cpp
list<int> ls;
ls.push_back(x);
ls.push_front(x);
ls.pop_back();
ls.pop_front();
ls.sort();           // Sort list
ls.reverse();        // Reverse order
```

---

## 🔹 **6. Deque – Double Ended Queue**

### 🔧 What is it?

Allows push/pop at both ends efficiently.

### ✅ Functions:

```cpp
deque<int> dq;
dq.push_back(x);
dq.push_front(x);
dq.pop_back();
dq.pop_front();
dq.front(), dq.back();
```

---

## 🔹 **7. Stack – LIFO**

### 🔧 What is it?

Last-In-First-Out structure.

### ✅ Functions:

```cpp
stack<int> st;
st.push(x);
st.top();    // Access top
st.pop();    // Remove top
st.empty();  // Is empty?
```

---

## 🔹 **8. Queue – FIFO**

### 🔧 What is it?

First-In-First-Out structure.

### ✅ Functions:

```cpp
queue<int> q;
q.push(x);
q.front();   // Access front
q.pop();     // Remove front
q.empty();
```

---

## 🔹 **9. Priority Queue**

### 🔧 What is it?

Max-heap by default. Highest priority at top.

### ✅ Functions:

```cpp
priority_queue<int> pq;
pq.push(x);
pq.top();    // Max element
pq.pop();

// Min-heap:
priority_queue<int, vector<int>, greater<int>> minpq;
```

---

## 🔹 **10. Set – Sorted Unique Elements**

### 🔧 What is it?

Stores unique elements in sorted order.

### ✅ Functions:

```cpp
set<int> s;
s.insert(x);
s.erase(x);
s.find(x);
s.count(x);          // 0 or 1
s.lower_bound(x);    // >= x
s.upper_bound(x);    // > x
s.size(); s.empty();
```

---

## 🔹 **11. Multiset – Sorted Duplicates Allowed**

### 🔧 What is it?

Like set but allows duplicates.

### ✅ Functions:

```cpp
multiset<int> ms;
ms.insert(x);
ms.erase(ms.find(x));  // Erases one occurrence
```

---

## 🔹 **12. Unordered Set – Hash Table**

### 🔧 What is it?

Faster than `set` on average. No order, unique elements.

### ✅ Functions:

```cpp
unordered_set<int> us;
us.insert(x);
us.find(x);
us.count(x);
```

---

## 🔹 **13. Map – Key-Value Pairs (Ordered)**

### 🔧 What is it?

Associative array. Keys sorted.

### ✅ Functions:

```cpp
map<string, int> mp;
mp["a"] = 1;
mp.insert({"b", 2});
mp.erase("a");
mp.find("b");
mp.count("b");
mp.size();
```

---

## 🔹 **14. Unordered Map – Hash Table**

### 🔧 What is it?

Like map but faster (average O(1)), keys not sorted.

### ✅ Functions:

```cpp
unordered_map<string, int> ump;
ump["a"] = 10;
ump.find("a");
ump.erase("a");
```

---

## 🔹 **15. Algorithms**

### ✅ Useful Functions:

```cpp
sort(v.begin(), v.end());           // Ascending
reverse(v.begin(), v.end());
max_element(v.begin(), v.end());
min_element(v.begin(), v.end());
accumulate(v.begin(), v.end(), 0);  // Sum
count(v.begin(), v.end(), x);
find(v.begin(), v.end(), x);
binary_search(v.begin(), v.end(), x);
```

---

## 🔹 **16. Custom Sorting with Comparator**

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

```cpp
int n = 7; // 0111
__builtin_popcount(n);        // Count set bits
__builtin_popcountll(n);      // For long long
```

---

## 🔹 **18. Next Permutation**

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

---

### 📌 Summary:

The STL is essential for writing clean, fast, and bug-free code in C++. Learning key containers, their **functions**, and **time complexities** gives you a strong edge in competitive programming and real-world development.

