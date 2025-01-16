```markdown
# Dart Class Naming Rules

1. **Class Name Should Start with an Uppercase Letter**  
   Class names must begin with an uppercase letter (e.g., `MyClass`).

2. **Use CamelCase**  
   Class names should follow **CamelCase**, where each subsequent word starts with an uppercase letter (e.g., `MyClassName`).

3. **Avoid Using Reserved Keywords**  
   Dart keywords (e.g., `class`, `var`, `int`) cannot be used as class names.

4. **Class Name Should Be Descriptive**  
   Choose a name that describes the purpose or role of the class (e.g., `Car`, `Person`, `BankAccount`).

5. **No Special Characters**  
   Class names can contain letters, numbers, and underscores but cannot start with a number.

6. **Avoid Using Spaces**  
   Do not use spaces in class names.

7. **Use Singular Form**  
   Class names are typically singular, representing a single instance (e.g., `Student` instead of `Students`).

---

# Dart Data Types and Variables

Dart is a **strongly typed language**, meaning variables must be declared with a type or inferred by Dart’s type inference system. Here's an overview of Dart's data types:

### 1. **Primitive Data Types**

- **int**: Represents whole numbers.
  ```dart
  int age = 25;
  ```

- **double**: Represents decimal numbers.
  ```dart
  double price = 99.99;
  ```

- **String**: Represents a sequence of characters.
  ```dart
  String name = 'Alice';
  ```

- **bool**: Represents a boolean value (`true` or `false`).
  ```dart
  bool isActive = true;
  ```

- **var**: A special type that infers the type based on the assigned value.
  ```dart
  var message = 'Hello, World!'; // Inferred as String
  ```

- **dynamic**: Represents a type that can change at runtime.
  ```dart
  dynamic value = 5;
  value = 'Now I am a string';
  ```

### 2. **Null Safety in Dart**

Dart supports **null safety**, ensuring variables can't hold a `null` value unless explicitly allowed.

- Nullable types use `?`:
  ```dart
  int? nullableInt = null;  // Can be null
  String? nullableString = 'Hello';  // Can be null
  ```

- Non-nullable types must be initialized with a non-null value.

### 3. **Collection Types**

Dart supports several collection types:

- **List**: A collection of ordered items (like an array).
  ```dart
  List<int> numbers = [1, 2, 3, 4];
  List<String> fruits = ['Apple', 'Banana'];
  ```

- **Set**: A collection of unique items.
  ```dart
  Set<String> uniqueNames = {'Alice', 'Bob', 'Charlie'};
  ```

- **Map**: A collection of key-value pairs.
  ```dart
  Map<String, int> studentGrades = {'Alice': 90, 'Bob': 85};
  ```

### 4. **Constants and Final Variables**

- **final**: A variable that can only be set once, initialized at runtime.
  ```dart
  final int age = 30;
  ```

- **const**: A compile-time constant whose value must be known at compile time.
  ```dart
  const pi = 3.14159;
  ```

### 5. **Type Inference**

Dart can infer the type of a variable based on its initial value:

```dart
var name = 'Alice';  // Inferred as String
var number = 10;     // Inferred as int
```

You can also explicitly specify types:
```dart
String name = 'Alice';
int number = 10;
```

### 6. **Type Aliases (Optional)**

Dart allows creating custom type aliases using `typedef`:

```dart
typedef IntList = List<int>;

IntList numbers = [1, 2, 3];
```

---

# Summary of Data Types

- **Numeric Types**: `int`, `double`
- **Text Type**: `String`
- **Boolean Type**: `bool`
- **Collection Types**: `List`, `Set`, `Map`
- **Dynamic Type**: `dynamic`
- **Nullable Types**: Use `?` to denote nullable types (e.g., `int?`)
- **Constants**: `final` (runtime constant), `const` (compile-time constant)

---

# Example Usage

```dart
void main() {
  int age = 25;
  double price = 99.99;
  String name = 'Alice';
  bool isActive = true;
  
  var city = 'London';  // Dart infers String
  
  // List
  List<String> fruits = ['Apple', 'Banana', 'Cherry'];
  
  // Map
  Map<String, int> studentGrades = {'Alice': 90, 'Bob': 85};
  
  // Nullable type
  String? middleName = null;
  
  print('Name: $name, Age: $age, Price: $price');
}
```

Dart offers a variety of data types and flexible ways to handle variables, making it a powerful language for handling different data types in programs.
```
