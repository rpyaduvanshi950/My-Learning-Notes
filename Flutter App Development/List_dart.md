Sure! Below is a comprehensive list of examples with syntax for all the concepts covered in the **Dart List Tutorial**:

### 1. **Creating Lists in Dart:**
Dart lists are ordered collections of objects. You can create a list using the following syntax.

```dart
// Creating a list with initial values
var list = [1, 2, 3, 4];  // List of integers

// Creating an empty list
var emptyList = List.empty();

// Creating a fixed-size list (can’t change the size after creation)
var fixedSizeList = List.filled(3, 0);  // Creates a list with 3 elements, all initialized to 0
```

### 2. **Fixed Size vs Growable Lists:**
- **Fixed Size List**: The size is fixed upon creation.
- **Growable List**: The size can be modified (elements can be added or removed).

```dart
// Fixed-size list
var fixedList = List.filled(3, 0);
print(fixedList);  // Output: [0, 0, 0]

// Growable list
var growableList = [1, 2, 3];  // This list can grow dynamically
growableList.add(4);  // Adding an element
print(growableList);  // Output: [1, 2, 3, 4]
```

### 3. **List Functions:**

#### a. **add()** - Adds a single element to the end of the list:
```dart
var list = [1, 2, 3];
list.add(4);
print(list);  // Output: [1, 2, 3, 4]
```

#### b. **addAll()** - Adds all elements from another list:
```dart
var list1 = [1, 2, 3];
var list2 = [4, 5, 6];
list1.addAll(list2);
print(list1);  // Output: [1, 2, 3, 4, 5, 6]
```

#### c. **insert()** - Inserts an element at a specific index:
```dart
var list = [1, 2, 3];
list.insert(1, 99);  // Insert 99 at index 1
print(list);  // Output: [1, 99, 2, 3]
```

#### d. **insertAll()** - Inserts multiple elements at a specific index:
```dart
var list = [1, 2, 3];
list.insertAll(1, [10, 20]);
print(list);  // Output: [1, 10, 20, 2, 3]
```

#### e. **update()** - Updates an element at a specific index:
```dart
var list = [1, 2, 3];
list[1] = 99;  // Update element at index 1
print(list);  // Output: [1, 99, 3]
```

#### f. **replaceRange()** - Replaces elements in a specified range:
```dart
var list = [1, 2, 3, 4, 5];
list.replaceRange(1, 3, [77, 88]);
print(list);  // Output: [1, 77, 88, 4, 5]
```

### 4. **Removing Elements from a List:**

#### a. **remove()** - Removes the first occurrence of a specific element:
```dart
var list = [1, 2, 3, 2, 4];
list.remove(2);  // Removes the first 2
print(list);  // Output: [1, 3, 2, 4]
```

#### b. **removeLast()** - Removes the last element:
```dart
var list = [1, 2, 3];
list.removeLast();
print(list);  // Output: [1, 2]
```

#### c. **removeAt()** - Removes an element at a specific index:
```dart
var list = [1, 2, 3, 4];
list.removeAt(1);  // Removes element at index 1
print(list);  // Output: [1, 3, 4]
```

#### d. **removeRange()** - Removes a range of elements:
```dart
var list = [1, 2, 3, 4, 5];
list.removeRange(1, 3);  // Removes elements from index 1 to 2
print(list);  // Output: [1, 4, 5]
```

### 5. **List Properties and Methods:**

#### a. **length** - Gets the number of elements in the list:
```dart
var list = [1, 2, 3];
print(list.length);  // Output: 3
```

#### b. **reverse()** - Reverses the list:
```dart
var list = [1, 2, 3, 4];
var reversedList = list.reversed.toList();
print(reversedList);  // Output: [4, 3, 2, 1]
```

#### c. **first** - Gets the first element:
```dart
var list = [1, 2, 3];
print(list.first);  // Output: 1
```

#### d. **last** - Gets the last element:
```dart
var list = [1, 2, 3];
print(list.last);  // Output: 3
```

#### e. **isEmpty** - Checks if the list is empty:
```dart
var list = [];
print(list.isEmpty);  // Output: true
```

#### f. **isNotEmpty** - Checks if the list is not empty:
```dart
var list = [1, 2, 3];
print(list.isNotEmpty);  // Output: true
```

### 6. **Reversing a List:**
Reversing a list in Dart does not alter the original list but creates a new reversed list.

```dart
var list = [1, 2, 3, 4];
var reversedList = list.reversed.toList();
print(reversedList);  // Output: [4, 3, 2, 1]
```

### 7. **Accessing and Manipulating List Elements:**

#### a. **Accessing elements**:
You can access elements by using their index (starts from 0).

```dart
var list = [10, 20, 30];
print(list[0]);  // Output: 10
```

#### b. **Changing elements**:
```dart
var list = [10, 20, 30];
list[1] = 25;  // Modify the element at index 1
print(list);  // Output: [10, 25, 30]
```

#### c. **Adding multiple elements**:
```dart
var list = [1, 2, 3];
list.addAll([4, 5, 6]);  // Adding multiple elements
print(list);  // Output: [1, 2, 3, 4, 5, 6]
```

### 8. **Iterating over a List:**

You can use loops to iterate over the list.

```dart
var list = [1, 2, 3, 4, 5];

// Using a for loop
for (var item in list) {
  print(item);
}

// Output:
// 1
// 2
// 3
// 4
// 5
```

### 9. **Sorting a List:**
You can sort a list using `sort()`.

```dart
var list = [5, 3, 8, 1];
list.sort();
print(list);  // Output: [1, 3, 5, 8]
```

---
