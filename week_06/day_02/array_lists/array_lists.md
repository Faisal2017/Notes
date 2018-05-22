# Array Lists

### Learning Objectives
- Know what an ArrayList is
- Understand the difference between an ArrayList and a basic array
- Be able to create ArrayLists, and add and remove items from them

## Intro

We've look at basic arrays and let's be honest, they were a lot of work. We've been used to using the power of Ruby arrays to help us manipulate our data. Luckily, in Java there is another way - ArrayList.

ArrayLists are much more similar to what we have seen before, complete with methods to help us out. They do have their own little quirks though, as always.

Let's rework our bear and bask in the glory of ArrayLists.

## Declaring an array list

First we need to tell our code that we want to use this class, in a similar way that we use require in Ruby.

``` java
//Bear.java
import java.util.*;
```

Yep, ArrayLists live in the java.util "namespace". Namespaces are just a way of bundling up code, like Ruby modules. Util is indeed a shocking name and it should really be "collections" or something. Don't be like Java. Don't call stuff util, or utils. For me. Please.

We can now update all of our code to use this shiny new collection.

``` java
//Bear.java
public class Bear {
  private String name;
  private ArrayList<Salmon> belly; //UPDATED

  public Bear(String name){
    this.belly = new ArrayList<Salmon>(); //UPDATED
    this.name = name;
  }
}
```

This looks a little weird, but we need a way to tell the ArrayList what it can contain and we use the angular brackets to do this.

Notice we don't need to give it a size anymore. Which is good news for mister Bear, since he can now eat as much as he wants.

## Helpful methods

We now have to use a size() method instead of length, which is super helpful.

``` java
//Bear.java
public int foodCount(){
	return belly.size();
}
```

Our eat and sleep methods are about to become beautiful.

``` java
//Bear.java
public void eat(Salmon salmon){
  belly.add(salmon);
}

public void sleep(){
  belly.clear();
}
```

Isn't it wonderful?? There are lots of other methods like `remove` you will find in the documentation which are worth having a little look at.

All of our unit tests should still pass, but we can remove the test for the belly being full since it's not an issue anymore.

``` java
//BearTest.java
//DELETE
@Test
public void canNotEatSalmonWhenBellyFull(){
  for(int i = 0; i<10; i++){
    bear.eat(salmon);
  }
  assertEquals(5, bear.foodCount());
}

//DELETE
@Test
public void bellyIsFull(){
  for(int i = 0; i<5; i++){
    bear.eat(salmon);
  }
  assertEquals(bear.isBellyFull(), true);
}

```


So, ArrayLists are resizeable and they have useful methods, like add() and remove(), however they don't take take primitive types. If we want to make an ArrayList of numbers we would need to use the Integer class, rather than ints.
