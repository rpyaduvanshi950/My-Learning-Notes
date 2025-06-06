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

