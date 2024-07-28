import { LineChart as Lchart, Line } from 'recharts';

const LineChart = () => {

    const MathMarks = [
        { name: 'Student 1', math: 85, science: 90, english: 88 },
        { name: 'Student 2', math: 78, science: 85, english: 80 },
        { name: 'Student 3', math: 92, science: 95, english: 94 },
        { name: 'Student 4', math: 74, science: 80, english: 78 },
        { name: 'Student 5', math: 88, science: 89, english: 86 },
        { name: 'Student 6', math: 91, science: 93, english: 90 },
        { name: 'Student 7', math: 76, science: 81, english: 79 },
        { name: 'Student 8', math: 83, science: 87, english: 85 },
        { name: 'Student 9', math: 89, science: 92, english: 91 },
        { name: 'Student 10', math: 95, science: 98, english: 97 },
      ];
    return (
        <div>
            <Lchart width={600} height={600} data={MathMarks}>
             <Line dataKey="math" stroke="yellow"></Line>
             <Line dataKey={"science"}stroke="red"></Line>
             </Lchart>
        </div>
    );
};

export default LineChart;