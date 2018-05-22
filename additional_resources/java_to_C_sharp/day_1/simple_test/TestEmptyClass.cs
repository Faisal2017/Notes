using System;
using NUnit.Framework;

namespace testing_project
{
    [TestFixture]
    public class EmptyClassTest
    {
        [Test]
        public void testHelloWorld()
        {
            EmptyClass empty = new EmptyClass();
            Assert.AreEqual ("Hello World!", empty.helloWorld ());
        }
    }
}