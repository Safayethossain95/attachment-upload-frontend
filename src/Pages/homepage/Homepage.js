import React from 'react'
import './Homepage.scss'
import CategoryBox from '../../Components/CategoryBox/CategoryBox'
import { completedCardsApi, doingCardsApi, incompleteCardsApi, overdueCardsApi, todoCardsApi, underReviewCardsApi } from '../../utils/api'
const Homepage = () => {
  return (
    <>
        <div className="homepagemain">
            <div className="wrapper">
                <CategoryBox api={incompleteCardsApi} flagcolor="#d21010" text="Incomplete"/>
                <CategoryBox api={todoCardsApi} flagcolor="#00b5ff" text="To-Do"/>
                <CategoryBox api={doingCardsApi} flagcolor="#ffe700" text="Doing"/>
                <CategoryBox api={underReviewCardsApi} flagcolor="" text="Under Review"/>
                <CategoryBox api={completedCardsApi} flagcolor="" text="Completed"/>
                <CategoryBox api={overdueCardsApi} flagcolor="" text="Overdue"/>
            </div>
        </div>
    </>
  )
}

export default Homepage