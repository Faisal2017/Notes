# EightBall App - Models

## Learning Objectives
* More practice in creating/testing Java class in Android Studio

## Your first Android App

Over the next couple of days we're going to create a simple Android App for a Magic 8 Ball.

> Ask the class if they know what a Magic 8-Ball does?

Basically we ask it a random question, shake the ball, and get a 'random' answer in return.

For our answers, we're going to create a model in Java which stores the answers and will return a random answer when the user enters a question. This afternoon we are just going to create the Java class for our answers and make some tests for them. We'll leave the Androidy magic for tomorrow.

First of all though, we need to create a project:

```
// setup

launchpad > android studio

Start a new android project

// application settings

Application name: EightBall
Company Domain: com.codeclan.example

Select the sdk version version 16 (Jelly Bean)
```

Note: there are many many sdk version of android, since it's always changing and improving. Different devices will have different versions - you've probably seen this when you have tried to install an app from the app store or google play and it says your device is not supported. In our case, we are going to target a version of Android which isn't the newest but can be run on all devices with that version of Android and later.

```
Click next

//Form factors

Don't change

// Activity

No activity > next

Activity name: Keep it as main activity

Click finish

```

### Models/Classes

So let's get on with creating a model for our answers. Again, this is just a review of some of the stuff you covered last week in Java. We are going to need a model to store our answers and to get back an answer when we shake the ball.

## Creating an Answers Class

There are many different ways we can get the answers. We may have a simple list of answers, or we may get them from an API. But whatever way we get them, and in whatever type of model they are stored, and however we set up our answers, we need to be able to do the following:

* get an answer to display

>  possibly write this on the board as a reminder for later.

So thinking about our app, how do we want to store our answers? What about a list of strings. So we could create a class which has an ArrayList of strings and implement the required methods.

> Perhaps mention that there are various ways in which we could set up our list of strings. We might populate it from a simple array of strings, or we might be parsing JSON we get from an API call.

> Draw diagram on the board and keep referring back to it

So lets create our class. Right-click on our package (example.codeclan.com.eightball) directory and selecting ```New->Java Class```. Let's call it ```Answers```.

```java
//Answers.java

public class Answers {

}
```

Add an ArrayList of strings to store all our answers:

```java
//Answers.java

public class Answers {
    private ArrayList<String> answers;

    public Answers() {
        answers = new ArrayList<String>();
    }
}
```

We might need to import the class ```ArrayList``` class using ```alt``` + ```return```

Now we have our class set up, we can let Android Studio do some work for us to create the constructor. We are going to get Android Studio to create our getter:

```
ctrl + Enter 
Select 'getter' and click OK.

```

Now we should also have:

```java
//Answers.java

    public ArrayList<String> getAnswers() {
        return answers;
    }
```

But this is not really good practice. Because ArrayLists are always mutable i.e. changeable, so if you simply return ```answers``` then you're really giving the calling function full access to it and so you're actually letting it change a private class member (oh no, no, no!)

So, to prevent this, rather than returning the list, we return a ***copy*** of the list. We can do this quite easily by simply calling the ArrayList constructor and pass in an existing list, in our case, ```answers```

```java
//Answers.java

    public ArrayList<String> getAnswers() {
        return new ArrayList<String>(answers);
    }
```

And we are also going to write a getLength() method:

```java
//Answers.java

public int getLength() {
  return answers.size();
}

```



Ok, before we go any further, let's do some TDD:


## Creating Unit Tests

So, first of all, we need to add a new class to run the tests.

```
Right click test package > new class > AnswersTest
```

This gives us an empty class. In order to be able to run tests we need to add the following two imports:

```java
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;
```

So our class will look like:

```java
//AnswersTest.java

import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class AnswersTest {
}
```

Now we need to add a test. Let's write a test to test the ```getAnswers()``` method defined by ```Answers```. At the moment our ```getAnswers()``` method returns an empty ArrayList, so we will just assertNotNull.

```java
//AnswersTest.java

import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class AnswersTest {
    @Test
    public void getAnswersTest()
    {
        Answers answers = new Answers();
        assertNotNull(answers.getAnswers());
    }
}
```

Right click on AnswersTest and it will allow us to run it.

At the moment we still don't have any answers to display. When create an ```Answers``` object using the constructor, we simply have an empty array list of strings. What we could do is create a method, called ```setUpAnswers```which adds a couple of answers to this empty array list. We can call this method from within the default constructor after the empty array list has been initiated.

So let's write test for that. We are going to have two answers in our setUpAnswers():

```java
//AnswersTest.java

    @Test
        public void testSetUpAnswers()
        {
            Answers answers = new Answers();
            assertEquals(2, answers.getLength());
        }

```

Run the test and see it fail.

### Task (10-15 minutes) -***IF TIME*** - otherwise do it in class.

* Complete the implementation of the ```setupAnswers``` method:
> Write on the board the steps:
- Create setUpAnswers() which contains a simple array with two strings inside
- Add a loop that iterates through the array and add each answer to our instance variable ```answers```
- Invoked in the constructor

#### Possible Solutions

Make this method ```private``` since it will only be called from within the default constructor.

First of all, let's add a simple array of strings, containing only two answers (can you guess where they come from?):

```java
//Answers.java

    private void setupAnswers() {
        String[] answersToAdd = {
                "Yes!",
                "That would be an ecumenical matter!"
        };
    }
```

Now we need to add these answers to the ArrayList ```answers``` in our class. We can do this by looping through the array and calling the ```add``` method we declared in the ```Answer``` class i.e.:

```java
//Answers.java

    private void setupAnswers() {

        String[] answersToAdd = {
                "Yes!",
                "That would be an ecumenical matter!"
        };

        for(String answer : answersToAdd) {
            answers.add(answer);
        }
    }
```

We can now call this method from within the default constructor, immediately after newing up the ArrayList e.g.:

```java
//Answers.java

    public Answers() {
        answers = new ArrayList<String >();
        setupAnswers();  // ADDED
    }
```

So lets run our test and see it pass.


### Constructor Overloading
To make our class more flexible we are going to add a second constructor (overloading) which allows us to create a new instance of Answers and passes in an ArrayList of strings. 

Let's write a test. First we want to set up a new arraylist of answers that we want to pass in.

```java
//Answers.java

ArrayList<String> testAnswers;

@Before
public void before() {
    testAnswers = new ArrayList<String>();
    testAnswers.add("Yes!");
    testAnswers.add("That would be an ecumenical matter!");
}
```

Now let's write the test for our new constructor, passing in our test answers;

```java
//Answers.java

@Test
public void createAnswersWithListTest()
{
    Answers answers = new Answers(testAnswers);
    assertEquals(2, answers.getLength());
}

```


### Task (5 minutes) 

* Write the new constructor, that takes in an ArrayList of answers.

### Solution
(This can be done using the shortcut ```ctrl + enter```)

```java
//Answers.java

public class Answers {
    private ArrayList<String> answers;

    public Answers() {
        answers = new ArrayList<String>();
    }

    public Answers(ArrayList<String> newAnswers) {  //UPDATED
        answers = newAnswers;                       //UPDATED
    } 
}
```

Run the test and see it pass:

Next add a method to add an answer to the list. We can use the ArrayList ```add``` method:

```java
///AnswersTest.java

@Test
public void addTest() {
    Answers answers = new Answers();

    int originalNumberOfAnswers = answers.getLength();
    answers.add("Yes");

    assertEquals(originalNumberOfAnswers + 1, answers.getLength());
}

```

### Task (5 minutes) Write the add() method

### Solution

```java
//Answers.java

    public void add(String answer) {
        answers.add(answer);
    }
```

We now have number of different ways to add the answer Strings into our ArrayList of answers.
>> List on the board the way we can add answers to our answes ArrayList


OK! Let's now think about getting that one random answer back that will eventually display on the screen when the user asks a question.

We want to get one random String from our ArrayList of strings and we need a helper method to do that. We want to write a method that takes in an number and gets the String with that index position from the ArrayList.


```java
//AnswersTest.java

@Test
public void getAnswerAtIndexTest() {
    Answers answers = new Answers(testAnswers);
    String result = answers.getAnswerAtIndex(1);
    assertEquals("That would be an ecumenical matter!", result);
}

```


### Task (10 minutes) 

* Write the getAnswerAtIndex() 
>> hint: use the .get() ArrayList method

### Solution


```java
//Answers.java

  public String getAnswerAtIndex(int index) {
      return answers.get(index);
  }
```


OK! We are ready to get our random answer!

Our ```getAnswer()``` method will return a random answer, so we can again test for notNull and print out the answer.

```java
@Test
public void getAnswerTest() {
    Answers answers = new Answers(testAnswers);

    String answer = answers.getAnswer();

    System.out.println("getAnswerTest. Answer: " + answer);
    assertNotNull(answer);
}

```

Let's write the method:
Our getAnswer() method should return return a random answer from our ArrayList.

```java
//Answers.java

    public String getAnswer() {
        //code goes here
    }
```

So how do we want to get our random answer:

>> Write on board:

* get a random number between 0 and the size of the list
* get the entry in the list at that position in the list and return it

So first of all, we want to generate a random number. We begin by creating an object of the Java ```Random``` class.

```java
//Answers.java

    public String getAnswer() {
        Random rand = new Random();
    }
```

Next, we need to get the size of the list, by calling the ```getLength``` method we added earlier:

```java
//Answers.java

    public String getAnswer() {
        Random rand = new Random();
        int listSize = getLength();
    }
```

We then need to get a random number between 0 and the size of the array. We can do this using the ```nextInt``` method from the ```Random``` class. We pass in the size of the list:

```java
//Answers.java

    public String getAnswer() {
        Random rand = new Random();
        int listSize = getLength();
        int index = rand.nextInt(listSize);      
    }
```

Now that we have a random number we can get the item in the list at our 'random' position by calling the ```getAnswerAtIndex``` we implemented earlier. The string returned by ```getAnswerAtIndex```is what our ```getAnswer``` method will return i.e.:

```java
//Answers.java

    public String getAnswer() {
        Random rand = new Random();
        int listSize = getLength();
        int index = rand.nextInt(listSize);
        String answer = getAnswerAtIndex(index);
        return answer;
    }
```






## Create an Interface

Let's say we want to make sure this class has the method getAnswer() by way of contract.

Thinking back to last week's Java lessons, what can we use to describe this 'contract' in our code? An ***interface***.

This interface will be implemented by whatever model(s) we use to store our answers and get them from, and so any model we use ***MUST*** implement the method(s) declared in the interface.  

So lets create our interface. We do this by right-clicking on our package (example.codeclan.com.eightball) directory and selecting ```New->Java Class```.

From the ```Kind``` dropdown menu, select 'Interface'

Now we need to supply an name for our new interface. Our interface concerns the answer we get, so we could call it ```Answer```, but we'll follow the Java coding convention, which uses the ```...able``` , so we'll call this interface ```Answerable```.

This should give us the following:

```java
//Answerable.java

public interface Answerable {
}
```


Note that in the Android Studio project window, the icon for the file is not a 'C' but an 'I'.

So what method(s) do we want to declare in our interface? (Going back to our list on the board) we need to get answer to display. Let's call this method ```getAnswer()```. Do we want it to return anything? Yes - we just want it to return a ```String``` containing our answer i.e.:

```java
    String getAnswer();
```

So now we have an interface which declares one functions:

```java
//Answerable.java

public interface Answerable {

    String getAnswer();
}
```


And we want out Answers class to implement the interface implements Answerable

```java
//Answers.java

public class Answers implements Answerable {} //UPDATED

```



Our final class should look like this:

```java
//Answers.java

public class Answers implements Answerable {

    private ArrayList<String> answers;

    public Answers() {
        answers = new ArrayList<String >();
        setupAnswers();  
    }

    public Answers(ArrayList<String> newAnswers) { 
        answers = new ArrayList<String>(newAnswers);
    } 

    public ArrayList<String> getAnswers() {
        return new ArrayList<String>(answers);
    }

    public void add(String answer) {
        answers.add(answer);
    }

    public String getAnswerAtIndex(int index) {
        return answers.get(index);
    }

    public int getLength() {
        return answers.size();
    }

    public String getAnswer() {
        Random rand = new Random();
        int listSize = getLength();
        int index = rand.nextInt(listSize);
        String answer = getAnswerAtIndex(index);
        return answer;
    }

    private void setupAnswers() {
        String[] answersToAdd = {
                "Yes!",
                "That would be an ecumenical matter!"
        };

        for(String answer : answersToAdd) {
            add(answer);
        }
    }
}
```
