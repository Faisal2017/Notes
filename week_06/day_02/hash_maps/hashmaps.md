# HashMaps

### Objectives

- Know what a HashMap is
- Know how to use a HashMap in your projects

# Intro

When we were learning Ruby, we saw how useful it was to store keys and values in a structured way - using hashes:

```ruby
  db_details = { dbname: "pizza_shop", host: "localhost" }
```

It allowed us to store and retrieve data without having to worry about the *order* of the data.

Most languages have a similar construct, and in Java, these are called HashMaps. (In other languages they might be called hashes, dictionaries, or associative arrays.)

Let's look at how we would initialise a HashMap in Java.

```java
  // HashMapDemo.java
  import java.util.HashMap;

  public class HashMapDemo {
    public static void main(String[] args) {
      HashMap javaKnowledge = new HashMap();

      javaKnowledge.put("John", "99%");
      javaKnowledge.put("Ally", "101%");

      System.out.println(javaKnowledge.get("John"));
    }
  }
```

So this works OK; the program outputs John's knowledge of Java as expected. 

Notice that we're initialising the HashMap as being empty, then using the ```.put()``` method to add keys and values.

You might have noticed that the compiler threw a warning when we compiled the code:

```
Note: HashMapDemo.java uses unchecked or unsafe operations.
```

The compiler is warning us that we should specify the types of the keys and values we are putting into the HashMap. Let's try again.

```java
  // HashMapDemo.java
  import java.util.HashMap;

  public class HashMapDemo {
    public static void main(String[] args) {
      HashMap<String, String> javaKnowledge = new HashMap<String, String>(); //MODIFIED

      javaKnowledge.put("John", "99%");
      javaKnowledge.put("Ally", "101%");

      System.out.println(javaKnowledge.get("John"));
    }
  }
```

Much better! Now Java will complain loudly if we try to set the key or value to anything other than a String.

## Keys

A note about HashMap keys: you can use any class as a key, provided that it implements the ```.equals()``` and ```.hashCode()``` methods.

## Values

When you store a value in a HashMap, it will always store an object, rather than a primitive type. Take a look at the following code.

```java
import java.util.HashMap;

public class HashMapDemo {
  public static void main(String[] args) {
    HashMap<String, Integer> ages = new HashMap<String, Integer>();

    ages.put("Alice", 52);
    ages.put("Bob", 24);

    Integer aliceAge = ages.get("Alice");

    String output = "Alice's age is " + aliceAge.toString();
    System.out.println(output);
  }
}
```

Because the value of Alice's age is a full integer object, we can call `toString()` on it. (We couldn't do this if it was a primitive type!)

## Methods

Let's take a look at some of the most common methods we can call on our HashMap:

```java
  // HashMapDemo.java
  
  javaKnowledge.put(key, value) // inserts a new entry into the HashMap

  javaKnowledge.get(key) // gets the value for the given key

  javaKnowledge.size() // returns the size of the HashMap as an integer

  javaKnowledge.clear() // clears all entries from the HashMap

  javaKnowledge.containsKey(key) // returns true if the HashMap contains the key

  javaKnowledge.containsValue(value) // returns true if the HashMap contains the value
```

[TASK] 

(i) Create a hashmap of keys and values for the populations of some countries. Here is some sample data (don't forget to think about the types of your keys and values!):

UK: 64,100,000

Germany: 80,620,000

France: 66,030,000

Japan: 127,300,000

(ii) Output some values from the HashMap using ```.get(key)``` and ```System.out.println()```. 

(iii) Investigate the use of the ```.values()``` and ```.keySet()``` methods on HashMap.
