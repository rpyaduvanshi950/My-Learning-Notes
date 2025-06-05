## 📚 Sorting Algorithms

## 1. 🔷 **Selection Sort**

### 🔸 **Concept**

* Selection Sort repeatedly **selects the minimum element** from the unsorted part and places it at the correct position.
* For each index, find the minimum in the rest of the array and **swap** it with the current index.

### 🔹 **Steps**

1. Start from index `i = 0` to `n-1`
2. Find the minimum in the subarray `[i...n-1]`
3. Swap the minimum element with the element at `i`

### 🧠 **Time Complexity**

* Worst, Average, Best: **O(n²)**
* Space: **O(1)** (In-place)

### 🧾 **Pseudocode**

```cpp
for i = 0 to n-1:
    minIndex = i
    for j = i+1 to n:
        if arr[j] < arr[minIndex]:
            minIndex = j
    swap arr[i] and arr[minIndex]
```

---

## 2. 🔷 **Bubble Sort**

### 🔸 **Concept**

* In each pass, **push the maximum element to the end** by repeatedly **swapping adjacent elements** if they are in the wrong order.
* Similar to bubbling up the largest value.

### 🔹 **Steps**

1. Loop `i` from `0` to `n-1`
2. Loop `j` from `0` to `n-i-1`
3. If `arr[j] > arr[j+1]`, **swap** them
4. Use a flag to check if any swap was made in an iteration (for optimization)

### 🧠 **Time Complexity**

* Worst & Average: **O(n²)**
* **Best: O(n)** (when array is already sorted with no swaps)
* Space: **O(1)**

### 🧾 **Pseudocode**

```cpp
for i = 0 to n-1:
    swapped = false
    for j = 0 to n-i-2:
        if arr[j] > arr[j+1]:
            swap arr[j], arr[j+1]
            swapped = true
    if not swapped:
        break
```

---

## 3. 🔷 **Insertion Sort**

### 🔸 **Concept**

* Builds the sorted array one element at a time by **inserting** each element into its correct position on the left side.
* Think of how you sort cards in your hand.

### 🔹 **Steps**

1. Start from index `1` to `n-1`
2. Store the current element
3. Shift all elements greater than current to the right
4. Place the current element in its correct position

### 🧠 **Time Complexity**

* Worst & Average: **O(n²)**
* **Best: O(n)** (when already sorted)
* Space: **O(1)**

### 🧾 **Pseudocode**

```cpp
for i = 1 to n-1:
    current = arr[i]
    j = i - 1
    while j >= 0 and arr[j] > current:
        arr[j+1] = arr[j]
        j = j - 1
    arr[j+1] = current
```

---

## 🔍 Comparison Table

| Algorithm      | Best Case | Worst Case | Space | Stable | Adaptive |
| -------------- | --------- | ---------- | ----- | ------ | -------- |
| Selection Sort | O(n²)     | O(n²)      | O(1)  | ❌      | ❌        |
| Bubble Sort    | O(n)      | O(n²)      | O(1)  | ✅      | ✅        |
| Insertion Sort | O(n)      | O(n²)      | O(1)  | ✅      | ✅        |

---

## 🔷 1. **Merge Sort (Divide and Conquer)**

### 🔸 **Concept**

* Divides the array into halves recursively, sorts each half, and then **merges** the sorted halves.
* Follows **divide → sort → merge** strategy.

### 🔹 **Steps**

1. Divide the array into two halves
2. Recursively sort each half
3. Merge the two sorted halves

### 🧠 **Time Complexity**

* Worst, Average, Best: **O(n log n)**
* Space: **O(n)** (extra space for merging)
* Stable: ✅

### 🧾 **Pseudocode**

```cpp
function mergeSort(arr, low, high):
    if low >= high:
        return
    mid = (low + high) / 2
    mergeSort(arr, low, mid)
    mergeSort(arr, mid+1, high)
    merge(arr, low, mid, high)

function merge(arr, low, mid, high):
    create temp array
    merge left and right sorted subarrays
    copy temp back to arr
```

---

## 🔷 2. **Recursive Bubble Sort**

### 🔸 **Concept**

* Same logic as iterative Bubble Sort, but implemented recursively.
* Base case: array size is 1
* Do one full pass to move largest element to the end, then call recursively for remaining array.

### 🧠 **Time Complexity**

* Worst & Average: **O(n²)**
* Best: **O(n)** (with optimization)

### 🧾 **Pseudocode**

```cpp
function bubbleSort(arr, n):
    if n == 1:
        return
    for i = 0 to n-2:
        if arr[i] > arr[i+1]:
            swap arr[i], arr[i+1]
    bubbleSort(arr, n-1)
```

---

## 🔷 3. **Recursive Insertion Sort**

### 🔸 **Concept**

* Sort first `n-1` elements recursively
* Insert the `n-th` element into its correct position

### 🧠 **Time Complexity**

* Worst & Average: **O(n²)**
* Best: **O(n)** (if array is sorted)

### 🧾 **Pseudocode**

```cpp
function insertionSort(arr, n):
    if n <= 1:
        return
    insertionSort(arr, n-1)
    last = arr[n-1]
    j = n-2
    while j >= 0 and arr[j] > last:
        arr[j+1] = arr[j]
        j = j - 1
    arr[j+1] = last
```

---

## 🔷 4. **Quick Sort (Divide and Conquer)**

### 🔸 **Concept**

* Picks a **pivot**, partitions the array such that elements smaller than pivot go left, greater go right.
* Recursively sort the left and right partitions.

### 🔹 **Steps**

1. Choose pivot (commonly last or random element)
2. Partition the array around pivot
3. Recursively apply quick sort to left and right subarrays

### 🧠 **Time Complexity**

* Worst: **O(n²)** (when array is already sorted and poor pivot chosen)
* Average & Best: **O(n log n)**
* Space: **O(log n)** (for recursion stack)
* Not stable ❌

### 🧾 **Pseudocode**

```cpp
function quickSort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quickSort(arr, low, pi-1)
        quickSort(arr, pi+1, high)

function partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j = low to high-1:
        if arr[j] < pivot:
            i++
            swap arr[i], arr[j]
    swap arr[i+1], arr[high]
    return i+1
```

---

## ✅ Summary Table of Time Complexities

| Algorithm           | Best       | Average    | Worst      | Space    | Stable |
| ------------------- | ---------- | ---------- | ---------- | -------- | ------ |
| Merge Sort          | O(n log n) | O(n log n) | O(n log n) | O(n)     | ✅      |
| Recursive Bubble    | O(n)       | O(n²)      | O(n²)      | O(1)     | ✅      |
| Recursive Insertion | O(n)       | O(n²)      | O(n²)      | O(1)     | ✅      |
| Quick Sort          | O(n log n) | O(n log n) | O(n²)      | O(log n) | ❌      |
