using System;
using NUnit.Framework;

namespace Bear
{
    [TestFixture]
    public class BearTest
    {
        Bear bear;
        Salmon salmon;
        Human human;

        [SetUp]
        public void Init() {
            bear = new Bear("Baloo", 25, 95.62);
            salmon = new Salmon();
            human = new Human();
        }

        [Test]
        public void HasName()
        {
            Assert.AreEqual( "Baloo", bear.Name );
        }

        [Test]
        public void HasAge()
        {
            Assert.AreEqual( 25, bear.age );
        }

        [Test]
        public void HasWeight()
        {
            Assert.AreEqual( 95.62, bear.weight );
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
        public void BellyStartsEmpty() 
        {
            Assert.AreEqual(0, bear.FoodCount());
        }

        [Test]
        public void CanEatSalmon()
        {
            bear.Eat(salmon);
            Assert.AreEqual(1, bear.FoodCount());
        }

        [Test]
        public void CanEatHuman()
        {
            bear.Eat(human);
            Assert.AreEqual(1, bear.FoodCount());
        }

        [Test]
        public void ShouldEmptyBellyAfterSleeping()
        {
          bear.Eat(salmon);
          bear.Eat(human);
          bear.Sleep();
          Assert.AreEqual(0, bear.FoodCount());
        }

        [Test]
        public void CanThrowUp()
        {
            bear.Eat(salmon);
            IFood food = bear.ThrowUp();
            Assert.IsNotNull(food);
        }

        [Test]
        public void CanGetOriginalSalmon()
        {
            bear.Eat(salmon);
            IFood food = bear.ThrowUp();
            Salmon original = (Salmon)food;
            Assert.AreEqual("swimming", original.Swim());
        }

        [Test]
        public void EdibleItemCanSwim()
        {
            bear.Eat(salmon);
            IFood food = bear.ThrowUp();
            Assert.AreEqual("swimming", food.Swim());
        }

    }
}