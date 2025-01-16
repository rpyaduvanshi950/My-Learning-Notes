### Dart Class Naming Rules

1. **Start with an Uppercase Letter**:  
   Class names should begin with an uppercase letter (e.g., `MyClass`).

2. **Use Camel Case**:  
   Class names should follow **CamelCase**, where each subsequent word starts with an uppercase letter (e.g., `MyClassName`).

3. **Avoid Reserved Keywords**:  
   Dart keywords like `class`, `var`, and `int` cannot be used as class names.

4. **Descriptive Class Names**:  
   Choose class names that describe their purpose or role (e.g., `Car`, `Person`, `BankAccount`).

5. **No Special Characters**:  
   Class names can only contain letters, numbers, and underscores but cannot start with a number.

6. **No Spaces**:  
   Class names must not contain spaces.

7. **Use Singular Form**:  
   Class names should generally be singular (e.g., `Student` rather than `Students`), representing a single instance.

---

### Dart Variables and Data Types

Dart is a **strongly typed language**, meaning variables must be declared with a type or inferred by Dart's type inference system. Here's an overview of Dart data types and variable handling:

#### 1. **Primitive Data Types**

- **int**: Represents whole numbers (e.g., `int age = 25;`)
- **double**: Represents decimal numbers (e.g., `double price = 99.99;`)
- **String**: Represents text (e.g., `String name = 'Alice';`)
- **bool**: Represents a boolean value (`true` or `false) (e.g., `bool isActive = true;`)
- **var**: Dart infers the type based on the value (e.g., `var message = 'Hello';`)
- **dynamic**: A variable that can change type at runtime (e.g., `dynamic value = 5;`)

#### 2. **Null Safety**

Dart supports **null safety**, ensuring variables cannot be assigned `null` unless explicitly allowed:

- To allow a variable to be nullable, use `?` (e.g., `int? nullableInt = null;`).
- Non-nullable variables must be initialized with a value.

#### 3. **Collection Types**

- **List**: An ordered collection of items (e.g., `List<int> numbers = [1, 2, 3];`).
- **Set**: A collection of unique items with no duplicates (e.g., `Set<String> uniqueNames = {'Alice', 'Bob'};`).
- **Map**: A collection of key-value pairs (e.g., `Map<String, int> grades = {'Alice': 90};`).

#### 4. **Constants and Final Variables**

- **final**: A variable that can only be set once, initialized at runtime (e.g., `final int age = 30;`).
- **const**: A compile-time constant whose value must be known at compile time (e.g., `const pi = 3.14159;`).

#### 5. **Type Inference**

Dart can infer the type of a variable based on its initial value:

```dart
var name = 'Alice';  // inferred as String
var age = 25;        // inferred as int
```

Alternatively, you can explicitly specify the type:

```dart
String name = 'Alice';
int age = 25;
```

#### 6. **Type Aliases**

Dart allows custom type aliases using the `typedef` keyword. This is useful for function signatures:

```dart
typedef IntList = List<int>;
IntList numbers = [1, 2, 3];
```

### Summary of Dart Data Types

- **Numeric Types**: `int`, `double`
- **Text Type**: `String`
- **Boolean Type**: `bool`
- **Collection Types**: `List`, `Set`, `Map`
- **Dynamic Type**: `dynamic`
- **Nullable Types**: Use `?` to denote nullable types (e.g., `int?`)
- **Constants**: `final` (runtime constant), `const` (compile-time constant)

### Example Usage

```dart
void main() {
  int age = 25;
  double price = 99.99;
  String name = 'Alice';
  bool isActive = true;
  
  var city = 'London'; // Dart infers String
  
  // List
  List<String> fruits = ['Apple', 'Banana', 'Cherry'];
  
  // Map
  Map<String, int> studentGrades = {'Alice': 90, 'Bob': 85};
  
  // Nullable type
  String? middleName = null;
  
  print('Name: $name, Age: $age, Price: $price');
}
```

Dart's data types provide flexibility in variable declaration, allowing developers to work with various data forms in a robust and type-safe manner.

In Dart, both `var` and `dynamic` are used to declare variables, but they have distinct differences in terms of how types are handled:

### 1. **`var`**:  
- **Type Inference**: When you declare a variable with `var`, Dart infers its type at the time of initialization based on the assigned value.  
- **Fixed Type After Initialization**: Once a variable is assigned a type (inferred from the initial value), it cannot change to a different type. This means that after Dart infers the type, the variable’s type becomes fixed for the rest of the program.  
- **Type Safety**: Since the type is inferred and fixed, Dart will enforce type safety. If you try to assign a different type later, it will result in a compile-time error.
- **Uninitialized Variables**: If a variable is declared with `var` but not initialized, Dart implicitly treats it as having a `dynamic` type. This allows the variable to later be assigned any type.

**Example with `var`:**
```dart
var name = 'Alice';  // Dart infers the type as String
name = 42;           // Error: A value of type 'int' can't be assigned to a variable of type 'String'

var uninitialized;   // Dart infers this as dynamic
uninitialized = 'Hello'; // It's a String now
uninitialized = 10;     // It's an int now
```

### 2. **`dynamic`**:  
- **No Type Inference**: The `dynamic` type does not infer the type at compile time. You can assign any type of value to a variable declared as `dynamic`.  
- **Flexible and Unchecked**: Since `dynamic` allows variables to change types during runtime, Dart does not perform type checking on these variables. This can lead to runtime errors if you perform operations that are not compatible with the actual value of the variable.  
- **Not Type-Safe**: With `dynamic`, the type safety checks are deferred to runtime, and there is no compile-time checking.

**Example with `dynamic`:**
```dart
dynamic name = 'Alice';  // Initially a String
name = 42;               // No error, now it's an int
name = true;             // No error, now it's a bool
```

### Key Differences

| Feature           | `var`                                      | `dynamic`                                |
|-------------------|--------------------------------------------|------------------------------------------|
| **Type Inference** | Type is inferred based on the initial value, or `dynamic` if uninitialized. | No type inference; you can assign any type. |
| **Type Safety**    | Type is fixed after initialization.        | No type safety; type checks happen at runtime. |
| **Usage**          | Use when the type is known and will not change. | Use when the type can vary or is not known ahead of time. |
| **Error Detection**| Errors are caught at compile-time.         | Errors are caught at runtime.            |

### Summary
- Use `var` when the type can be inferred and remains constant. If you don't initialize it, Dart treats it as `dynamic`.
- Use `dynamic` when the type is flexible and can change at runtime. However, this sacrifices type safety and defers type checking to runtime.
