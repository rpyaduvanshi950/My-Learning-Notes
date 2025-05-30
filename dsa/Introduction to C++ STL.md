## 🔹 **1. Introduction to C++ STL**

* **STL** stands for **Standard Template Library** and consists of:

  * **Containers** – Store collections of data (e.g., `vector`, `set`)
  * **Algorithms** – Provide functionality (e.g., `sort`, `binary_search`)
  * **Iterators** – Objects that point to elements in containers

```cpp
#include <bits/stdc++.h>
using namespace std;
```

---

## 🔹 **2. Pair and Nested Pair**

### ✅ Syntax:

```cpp
pair<int, int> p = {1, 2};
cout << p.first << " " << p.second << endl;

pair<int, pair<int, int>> nested = {1, {2, 3}};
cout << nested.first << " " << nested.second.first << " " << nested.second.second << endl;
```

### 💡 Use-case:

* Useful in problems requiring associations like coordinates, graphs, etc.

---

## 🔹 **3. Vectors and Dynamic Arrays**

### ✅ Syntax:

```cpp
vector<int> v; // Empty vector
v.push_back(10);
v.emplace_back(20); // Faster than push_back

vector<pair<int, int>> vp;
vp.push_back({1, 2});
vp.emplace_back(3, 4);

vector<int> v2(5, 100); // 5 elements with value 100
vector<int> v3(v2);     // Copy of v2
```

### 🧠 Notes:

* Vectors grow dynamically.
* Access via index `v[i]` or iterator.

---

## 🔹 **4. Iterators**

### ✅ Syntax:

```cpp
vector<int>::iterator it = v.begin();
cout << *(it) << endl;



for (auto it = v.begin(); it != v.end(); ++it)
    cout << *it << " ";

for (auto x : v)  // Range-based loop
    cout << x << " ";
```

---

## 🔹 **5. Modifying Vectors**

### ✅ Syntax:

```cpp
v.erase(v.begin() + 1);  // Delete element at index 1
v.erase(v.begin(), v.begin() + 3); // Delete range [1, 3)

v.insert(v.begin(), 300);           // Insert 300 at front
v.insert(v.begin() + 1, 2, 10);     // Insert 2 copies of 10
v.pop_back();                       // Remove last element
v.clear();                          // Remove all elements
v.empty();                          // Check if vector is empty
```

---

## 🔹 **6. List and Deque**

### ✅ Syntax:

```cpp
list<int> ls;
ls.push_back(1);
ls.push_front(2);

deque<int> dq;
dq.push_back(1);
dq.push_front(2);
dq.pop_back();
```

### 💡 Notes:

* `list` and `deque` allow efficient insertions/deletions at both ends.
* `list` doesn't support random access (no indexing).

---

## 🔹 **7. Stack (LIFO)**

### ✅ Syntax:

```cpp
stack<int> st;
st.push(1);
st.push(2);
cout << st.top();  // 2
st.pop();          // Removes top
```

---

## 🔹 **8. Queue (FIFO)**

### ✅ Syntax:

```cpp
queue<int> q;
q.push(1);
q.push(2);
cout << q.front();  // 1
q.pop();
```

---

## 🔹 **9. Priority Queue (Max-Heap by default)**

### ✅ Syntax:

```cpp
priority_queue<int> pq;
pq.push(10);
pq.push(5);
cout << pq.top();  // 10

// Min-heap:
priority_queue<int, vector<int>, greater<int>> minpq;
```

---

## 🔹 **10. Set and Multiset (Sorted Unique Elements)**

### ✅ Syntax:

```cpp
set<int> s;
s.insert(1);
s.insert(2);
s.erase(1);
auto it = s.find(2);
cout << *it;

s.count(2); // returns 1 if exists

s.lower_bound(2);
s.upper_bound(2);
```

### 🧠 Time Complexity:

* Insertion, Deletion, Search: O(log n)

---

## 🔹 **11. Unordered Set**

### ✅ Syntax:

```cpp
unordered_set<int> us;
us.insert(1);
us.find(1);
```

### 🧠 Time Complexity:

* Average: O(1), Worst: O(n)

---

## 🔹 **12. Map and Unordered Map**

### ✅ Syntax:

```cpp
map<string, int> mp;
mp["abc"] = 1;
mp.insert({"def", 2});
cout << mp["abc"];  // 1
mp.erase("abc");
mp.find("def");

unordered_map<string, int> ump;
```

---

## 🔹 **13. Sorting and Comparators**

### ✅ Simple Sort:

```cpp
vector<int> a = {3, 1, 2};
sort(a.begin(), a.end()); // Ascending
```

### ✅ Sort with Comparator:

```cpp
bool comp(pair<int, int> a, pair<int, int> b) {
    if (a.second == b.second)
        return a.first > b.first;  // Descending first if second equal
    return a.second < b.second;    // Ascending second
}
sort(vp.begin(), vp.end(), comp);
```

---

## 🔹 **14. Bit Manipulation – popcount**

```cpp
int n = 7; // 0111
cout << __builtin_popcount(n); // Output: 3
```

---

## 🔹 **15. Next Permutation**

```cpp
string s = "123";
sort(s.begin(), s.end());
do {
    cout << s << endl;
} while (next_permutation(s.begin(), s.end()));
```

---

## 🔹 **Common STL Time Complexities**

| Container/Operation      | Time Complexity      |
| ------------------------ | -------------------- |
| `vector.insert()`        | O(n)                 |
| `set.insert()`           | O(log n)             |
| `unordered_set.insert()` | O(1) Avg, O(n) Worst |
| `map.find()`             | O(log n)             |
| `priority_queue.push()`  | O(log n)             |

---

### 📌 Summary:

STL simplifies DSA implementation with ready-to-use containers and algorithms. Knowing syntax, use-cases, and time complexities helps in competitive programming and efficient development.
