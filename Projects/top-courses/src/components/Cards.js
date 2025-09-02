import React from "react";
import Card from "./Card";

const Cards = ({ courses }) => {
  let allCourses = [];

  const getCourses = () => {
    if (!courses) return [];
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course);
      });
    });
    return allCourses;
  };

  return (
    <div>

      {
      getCourses().map((course, index) => {
        return <Card key={index} course={course} />; 
      })
      }
    </div>
  );
};

export default Cards;
