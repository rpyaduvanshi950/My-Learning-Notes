### 📘 **Topic Concept**

* **Binary Search** is an efficient searching algorithm used on **sorted** data.
* It reduces the search space by **halving** it in every step.
* Two primary implementations: **Iterative** and **Recursive**.
* Handles potential **overflow issues** in calculating the middle index.

---

### 🧠 **Key Concepts**

1. **Precondition**: Array must be sorted.
2. **Search Space**: Defined by `low` and `high` indices.
3. **Comparison**: Element at `mid` is compared to the target.
4. **Halving**:

   * If `target < arr[mid]`: search in left half.
   * If `target > arr[mid]`: search in right half.
   * If `target == arr[mid]`: target found.
5. **Overflow Prevention**:

   * Avoid `(low + high)/2` → can overflow.
   * Use `low + (high - low)/2`.

---

### 🧾 **Pseudo Code: Iterative Binary Search**

```
function binarySearch(arr, target):
    low = 0
    high = length(arr) - 1

    while low <= high:
        mid = low + (high - low) // 2

        if arr[mid] == target:
            return mid
        else if arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1

    return -1
```

---

### 🧾 **Pseudo Code: Recursive Binary Search**

```
function binarySearchRecursive(arr, low, high, target):
    if low > high:
        return -1

    mid = low + (high - low) // 2

    if arr[mid] == target:
        return mid
    else if arr[mid] < target:
        return binarySearchRecursive(arr, mid + 1, high, target)
    else:
        return binarySearchRecursive(arr, low, mid - 1, target)
```

---

### 💻 **C++ Code: Iterative Binary Search**

```cpp
int binarySearch(vector<int>& arr, int target) {
    int low = 0, high = arr.size() - 1;

    while (low <= high) {
        int mid = low + (high - low) / 2; // Prevent overflow

        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1; // Not found
}
```

---

### 💻 **C++ Code: Recursive Binary Search**

```cpp
int binarySearchRecursive(vector<int>& arr, int low, int high, int target) {
    if (low > high) return -1;

    int mid = low + (high - low) / 2; // Prevent overflow

    if (arr[mid] == target) return mid;
    else if (arr[mid] < target)
        return binarySearchRecursive(arr, mid + 1, high, target);
    else
        return binarySearchRecursive(arr, low, mid - 1, target);
}
```

---

### ⏱️ **Time and Space Complexity**

| Implementation | Time Complexity | Space Complexity           |
| -------------- | --------------- | -------------------------- |
| Iterative      | **O(log n)**    | **O(1)**                   |
| Recursive      | **O(log n)**    | **O(log n)** (stack space) |


## LOWER BOUND PROBLEM
### 📘 **Concept Summary**

* **Lower Bound**: First index where `arr[i] ≥ target`.
* **Upper Bound**: First index where `arr[i] > target`.
* **Search Insert Position**: Return index of `target` if found, else position where it should be inserted.
* **Floor**: Greatest element `≤ target`.
* **Ceil**: Smallest element `≥ target`.

All can be efficiently implemented using **Binary Search**.

---

### 🧾 **Pseudo Code (Lower & Upper Bound)**

```
// Lower Bound
function lowerBound(arr, target):
    low = 0, high = len(arr) - 1
    ans = len(arr)
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] >= target:
            ans = mid
            high = mid - 1
        else:
            low = mid + 1
    return ans

// Upper Bound
function upperBound(arr, target):
    low = 0, high = len(arr) - 1
    ans = len(arr)
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] > target:
            ans = mid
            high = mid - 1
        else:
            low = mid + 1
    return ans
```

---

### 💻 **C++ Code**

```cpp
int lowerBound(vector<int>& arr, int target) {
    int low = 0, high = arr.size() - 1, ans = arr.size();
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] >= target) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}

int upperBound(vector<int>& arr, int target) {
    int low = 0, high = arr.size() - 1, ans = arr.size();
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] > target) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}
```

---

### ⏱️ **Complexity**

| Operation         | Time         | Space    |
| ----------------- | ------------ | -------- |
| Lower/Upper Bound | **O(log n)** | **O(1)** |
| Search Insert Pos | **O(log n)** | **O(1)** |
| Floor/Ceil        | **O(log n)** | **O(1)** |

---
