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
        ring = new Ring(MetalType.GOLD);
      }

      [Test]
      public void CanGetMetal()
      {
        Assert.AreEqual (MetalType.GOLD, ring.Metal);
      }

      // [Test]
      // public void CanBeMisspelled()
      // {
      //   ring = new Ring("Golllld");
      //   Assert.AreEqual ("Golllld", ring.metal);
      // }

      // [Test]
      // public void MetalCanBeBanana()
      // {
      //   ring = new Ring("Banana");
      //   Assert.AreEqual ("Banana", ring.metal);
      // }
    }
}
