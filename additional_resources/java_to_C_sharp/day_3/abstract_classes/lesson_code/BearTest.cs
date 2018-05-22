using System;
using NUnit.Framework;

namespace Bear
{
    [TestFixture]
    public class EmptyClassTest
    {
      Bear bear;

      [SetUp]
      public void Init() 
      {
          bear = new PolarBear();
      }

      [Test]
      public void canGather()
      {
        Assert.AreEqual("Gone fishing", bear.GatherFood());
      }

      [Test]
      public void canRoar()
      {
        Assert.AreEqual("roar!", bear.Roar());
      }
    }
}