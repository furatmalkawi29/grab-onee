import React, {useEffect} from 'react'
import SideBar from '../components/SideBar/SideBar'
import './HomePage.scss'
import Section from '../components/Section/Section'
import ProductCard from "../components/ProductCard/ProductCard";
import CategoryCard from '../components/CategoryCard/CategoryCard'
import TopSection from '../components/TopSection/TopSection'
import SubscribeBanner from '../components/SubscribeBanner/SubscribeBanner'
import data from '../data.json'


export default function HomePage() {

  useEffect( () => {
    document.body.style.backgroundColor = "#F4F7FB";
      }, [])

      return (
    <React.Fragment>

 <div className="home-page-top-grid">
      <SideBar/>
      <TopSection>
      {data.top.map((element,index)=>{
          return <ProductCard key={`top-${index}`} data={element}/>
        })
      }
      </TopSection>
  </div>

  <SubscribeBanner componentClass="home-subscribe" headingClass="home-heading-class"/>


      <Section header="Featured Auckland deals">
        <CategoryCard data={{
    "title":"Grocery Goodies",
    "overlay":"Grocery Goodies",
    "url":"p5"
  }}/>
        {data.featured.map((element,index)=>{
          return <ProductCard key={`featured-${index}`} data={element}/>
        })
      }
        </Section>

      <Section header="Collections">
      {data.collections.map((element,index)=>{
          return <CategoryCard key={`collections-${index}`} data={element}/>
        })
      }
      </Section>


      <Section header="Escapes">
      {data.escapes.map((element,index)=>{
          return <ProductCard key={`escapes-${index}`} data={element}/>
        })
      }
      </Section>


      <Section header="Activities, Events & Outdoors">
      {data.activities.map((element,index)=>{
          return <ProductCard key={`activities-${index}`} data={element}/>
        })
      }
      </Section>

      <Section header="Store">
      {data.store.map((element,index)=>{
          return <ProductCard key={`store-${index}`} data={element}/>
        })
      }
      </Section>

      <Section header="Restaurants, Bars, Cafes">
      {data.restaurants.map((element,index)=>{
          return <ProductCard key={`restaurants-${index}`} data={element}/>
        })
      }
      </Section>

      <Section header="Beauty, Massage & Spa">
      {data.beauty.map((element,index)=>{
          return <ProductCard key={`beauty-${index}`} data={element}/>
        })
      }
      </Section>


      <Section header="House & Garden">
      {data.house.map((element,index)=>{
          return <ProductCard key={`house-${index}`} data={element}/>
        })
      }
      </Section>


      <Section header="Fitness & Sports ">
      {data.fitness.map((element,index)=>{
          return <ProductCard key={`fitness-${index}`} data={element}/>
        })
      }
      </Section>

      <Section header="Automotive">
      {data.automotive.map((element,index)=>{
          return <ProductCard key={`automotive-${index}`} data={element}/>
        })
      }
      </Section>

    </React.Fragment>
  )
}
