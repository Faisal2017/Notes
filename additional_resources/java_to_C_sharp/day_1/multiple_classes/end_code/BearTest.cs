using System;
using NUnit.Framework;

namespace Bear
{
    [TestFixture]
    public class BearTest
    {
        Bear bear;
        Salmon salmon;

        [SetUp]
        public void Init() {
            bear = new Bear("Baloo", 25, 95.62);
            salmon = new Salmon();
        }

        [Test]
        public void HasName()
        {
            Assert.AreEqual( "Baloo", bear.Name );
        }

        [Test]
        public void HasAge()
        {
            Assert.AreEqual( 25, bear.Age );
        }

        [Test]
        public void HasWeight()
        {
            Assert.AreEqual( 95.62, bear.Weight );
        }

        [Test]
        public void ReadyToHibernateIfGreaterThan80() 
        {
            Assert.AreEqual(true, bear.ReadyToHibernate());
        }

        [Test]
        public void NotReadyToHibernateIfLessThan80() 
        {
            Bear thinBear = new Bear("Baloo", 25, 75.92);
            Assert.AreEqual(false, thinBear.ReadyToHibernate());
        }

        [Test]
        public void BellyStartsEmpty() {
            Assert.AreEqual(0, bear.FoodCount());
        }

        [Test]
        public void CanEatSalmon() {
            bear.Eat(salmon);
            Assert.AreEqual(1, bear.FoodCount());
        }

        [Test]
        public void BellyIsFull() {
            for(int i = 0; i < 5; i++)
            {
              bear.Eat(salmon);
            }

            Assert.AreEqual(true, bear.BellyFull());
        }

        public void ShouldEmptyBellyAfterSleeping(){
          bear.Eat(salmon);
          Assert.AreEqual(1, bear.FoodCount());
          bear.Sleep();
          Assert.AreEqual(0, bear.FoodCount());
        }

    }
}