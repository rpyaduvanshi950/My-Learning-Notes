
# 🔑 **What is Hashing and Where is it Used?**

**Hashing** is a technique to **store and retrieve data efficiently** using a **key → value** mapping.
It’s widely used in:

* ✅ **Competitive programming**
* ✅ **Caching**
* ✅ **Counting frequency**
* ✅ **Indexing data**
* ✅ **Lookups in constant or logarithmic time**

---

## 📦 **Use-Case 1: Count Frequency of Numbers in an Array**

```cpp
int hash[1000001]; // Works for values up to 10^6

// Pre-compute frequency
for (int i = 0; i < n; i++) {
    hash[arr[i]]++;
}

// Querying
cout << "Frequency of 3: " << hash[3] << endl;
```

> 🔍 Efficient for static frequency queries.
> ⏱️ Time Complexity: O(N + Q)
> 🧠 Use when elements are ≤ 10^6

---

## 🔤 **Use-Case 2: Count Frequency of Characters in a String**

### Method 1: Only lowercase letters (`a` to `z`)

```cpp
int hash[26]; // Only lowercase

for (char c : str) {
    hash[c - 'a']++;
}

// Frequency of 'e'
cout << hash['e' - 'a'];
```

### Method 2: All characters (ASCII)

```cpp
int hash[256]; // Covers all ASCII

for (char c : str) {
    hash[(int)c]++;
}
```

> 📘 Use for strings when quick frequency lookup is needed
> 🔁 Optimizes repetitive counting operations

---

## 📍 **Map and Unordered Map in C++**

### 🧭 `map` (Ordered Map)

* Stores key-value pairs in **sorted** order by key
* Time complexity: O(log N)

```cpp
map<int, int> mp;

mp[5] = 10;
mp[1] = 2;

// Iteration
for (auto it : mp) {
    cout << it.first << ": " << it.second << endl;
}
```

> 🔍 Use when you need **sorted data** or keys are **custom types**

---

### ⚡ `unordered_map` (Hash Map)

* Stores key-value pairs in **no specific order**
* Average time: O(1)
* Worst case: O(N) due to collisions

```cpp
unordered_map<string, int> ump;

ump["apple"] = 5;
ump["banana"]++;

cout << "Apple: " << ump["apple"] << endl;
```

> ⚠️ Best for fast lookups. Use when order doesn’t matter.
> 💥 **Worst case** happens during **hash collisions**

---

## 🎯 **Hash Function & Division Method**

### 🔢 Hash Formula:

```cpp
index = key % table_size;
```

> Common technique: simple and effective

### 💥 **Collision Handling**: When two keys hash to the same index

### Techniques:

* **Chaining**: Use linked list at each index
* **Open Addressing**: Try next index if collision happens (e.g., linear probing)

---

## ⚠️ **Time Complexities Recap**

| Structure       | Average Time | Worst Time | Ordered? |
| --------------- | ------------ | ---------- | -------- |
| Array Hashing   | O(1)         | O(1)       | ❌        |
| `map`           | O(log N)     | O(log N)   | ✅        |
| `unordered_map` | O(1)         | O(N)       | ❌        |

---

## 💡 **Practical Use-Cases of Hashing**

| Problem Type                       | Tool to Use                  |
| ---------------------------------- | ---------------------------- |
| Count frequency of items           | Array / Hash map             |
| Fast lookup of existing elements   | `unordered_map`              |
| Need sorted keys                   | `map`                        |
| Count characters in string         | Character hash array         |
| High volume frequency counting     | Global int array             |
| Optimizing repeated string queries | `unordered_map<string, int>` |

---

## 🔁 **Example Problems**

1. **Find majority element in array**

   * Use `unordered_map<int, int> mp;`
2. **Check if two strings are anagrams**

   * Use character frequency hash (size 26)
3. **Find first non-repeating character**

   * Use frequency + first index hash
4. **Check duplicates in array**

   * Use `unordered_set<int>` or `unordered_map`

