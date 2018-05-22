using System;
using NUnit.Framework;

namespace Bear
{
    [TestFixture]
    public class BearTest
    {
        Bear bear;

        [SetUp]
        public void Init() {
            bear = new Bear("Baloo", 25, 95.62);
        }

        [Test]
        public void TestHasName()
        {
            //Bear bear = new Bear("Baloo", 25, 95.62);
            Assert.AreEqual( "Baloo", bear.Name );
        }

        [Test]
        public void TestHasAge()
        {
            //Bear bear = new Bear("Baloo", 25, 95.62);
            Assert.AreEqual( 25, bear.Age );
        }

        [Test]
        public void TestHasWeight()
        {
            //Bear bear = new Bear("Baloo", 25, 95.62);
            Assert.AreEqual( 95.62, bear.Weight );
        }

        [Test]
        public void TestReadyToHibernateIfGreaterThan80() 
        {
            Assert.AreEqual(true, bear.ReadyToHibernate());
        }

        [Test]
        public void TestNotReadyToHibernateIfLessThan80() 
        {
            Bear thinBear = new Bear("Baloo", 25, 75.92);
            Assert.AreEqual(false, thinBear.ReadyToHibernate());
        }


    }
}