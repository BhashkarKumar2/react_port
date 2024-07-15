import React from 'react';

const Education = () => {
  return (
    <section id="education">
      <div className="profession" style={{ backgroundColor: '#22252c' }}>
        <h2 style={{ fontSize: '40px', margin: '0 auto', marginBottom: '30px', textAlign: 'center', color: 'aquamarine', padding: '60px' }}>EDUCATION</h2>
      </div>
      <div className="bodyedu">
        <div className="timelineedu">

        <div className="containeredu left-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCnDaGA9NovcNagmIUwl7WV4zLG4o06iiZw&s" alt="ST. Therese's School Logo" />
            <div className="text-box">
              <h2>ST. Therese's School</h2>
              <strong>2018 - 2019</strong>
              <span className="left-container-arrow" id="left-container-arrow"></span>
            </div>
          </div>
          



          <div className="containeredu right-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCnDaGA9NovcNagmIUwl7WV4zLG4o06iiZw&s" alt="S.M. Arya Public School Logo" />
            <div className="text-box">
              <h2>S.M. Arya Public School</h2>
              <strong>2020 - 2022</strong>
              <span className="right-container-arrow" id="right-container-arrow"></span>
            </div>
          </div>

          <div className="containeredu left-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCnDaGA9NovcNagmIUwl7WV4zLG4o06iiZw&s" alt="DTU Logo" />
            <div className="text-box">
              <h2>Delhi Technological University</h2>
              <strong>2022-2026</strong>
              <span className="left-container-arrow" id="left-container-arrow"></span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Education;
