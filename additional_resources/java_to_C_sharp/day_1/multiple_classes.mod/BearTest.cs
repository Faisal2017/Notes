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
            //Bear bear = new Bear("Baloo", 25, 95.62);
            Assert.AreEqual( "Baloo", bear.Name );
        }

        [Test]
        public void HasAge()
        {
            //Bear bear = new Bear("Baloo", 25, 95.62);
            Assert.AreEqual( 25, bear.Age );
        }

        [Test]
        public void HasWeight()
        {
            //Bear bear = new Bear("Baloo", 25, 95.62);
            Assert.AreEqual( 95.62, bear.Weight );
        }

        [Test]
        public void ReadyToHibernateIfGreaterThan80() 
        {
            Assert.IsTrue(bear.ReadyToHibernate());
        }

        [Test]
        public void NotReadyToHibernateIfLessThan80() 
        {
            Bear thinBear = new Bear("Baloo", 25, 75.92);
            Assert.IsFalse(thinBear.ReadyToHibernate());
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

        // [Test]
        // public void BellyFull(){
        //   for(int i = 0; i < 5; i++){
        //     bear.Eat(salmon);
        //   }
        //   Assert.AreEqual(true, bear.BellyFull());
        // }

        // [Test]
        // public void CannotEatSalmonWhenBellyFull(){
        //   for(int i = 0; i < 10; i++){
        //     bear.Eat(salmon);
        //   }
        //   Assert.AreEqual(bear.FoodCount(), 5);
        // }

        [Test]
        public void ShouldEmptyBellyAfterSleeping()
        {
            bear.Eat(salmon);
            Assert.AreEqual(1, bear.FoodCount());
            bear.Eat(human);
            Assert.AreEqual(2, bear.FoodCount());
            bear.Sleep();
            Assert.AreEqual(0, bear.FoodCount());

        }

        [Test]
        public void canThrowUp(){
          bear.Eat(salmon);
          IFood food = bear.ThrowUp();
          Assert.IsNotNull(food);
          Salmon original = (Salmon) food;
          Assert.AreEqual("swimming", original.Swim());
        }

    }
}