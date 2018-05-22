using Jewellery;
using NUnit.Framework;

namespace tests
{
    [TestFixture]
    public class RingTest
    {
      Ring ring;
      
      [SetUp]
      public void Init() {
        ring = new Ring("Gold");
      }

      [Test]
      public void CanGetMetal()
      {
        Assert.AreEqual ("Gold", ring.Metal);
      }
    }
}
