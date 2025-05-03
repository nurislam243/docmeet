import React, { useEffect, useState } from 'react';
import CancelAppointment from '../../components/CancelAppointment/CancelAppointment';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { getAppointments, removeAppointment } from '../../utility';
import { Helmet } from 'react-helmet-async';
import EmptyAppointment from '../../components/ui/EmptyAppointment';

const MyBookings = () => {
    const [displayAppointments, setDisplayAppointments] = useState([]);
    useEffect(() => {
        const savedAppointments = getAppointments();
        setDisplayAppointments(savedAppointments);
    }, [])

    const handleRemoveAppointment=(id)=>{
        removeAppointment(id);
        setDisplayAppointments(getAppointments())
    }

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', '#f5f242', '#a8d60f', '#0c0752', '#681cba', '#9b1cba', '#c78989', '#18ccd9'];

    const data = displayAppointments;

    const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
    };

    const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className='bg-[#EFEFEF] pt-2 pb-[111px] px-2 @min-[350px]:px-3 @min-[400px]:px-4 @min-[500px]:px-5 @min-[640px]:px-12 @min-[768px]:px-6 @min-[1000px]:px-12 @min-[1550px]:px-[120px]  @min-[1750px]:px-[160px]'>
            <Helmet>
                <title>My Bookings | DocMeet</title>
            </Helmet>
            {
                (displayAppointments.length === 0) ? <EmptyAppointment></EmptyAppointment> : 
                <div className="">
                    <div className="flex justify-center bg-white rounded-2xl md:px-3 xl:px-[48px] 2xl:pt-[48px] md:pt-3 md:pb-3 2xl:pb-[30px]">
                        <ResponsiveContainer width="100%" height={538}>
                            <BarChart
                            data={data}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Bar
                                dataKey="fee"
                                fill="#8884d8"
                                shape={<TriangleBar />}
                                label={{ position: 'top' }}
                            >
                                {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                                ))}
                            </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
        
                    <div className="pt-[100px]">
                        <h1 className='font-extrabold text-[40px] text-[#0F0F0F] text-center mb-4'>My Today Appointments</h1>
                        <p className='leading-[26px] text-[#0F0F0F] text-center mb-8'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
                    </div>
                    <div className="flex flex-col gap-9">
                        {
                            displayAppointments.map((singleAppointment)=><CancelAppointment handleRemoveAppointment={handleRemoveAppointment} singleAppointment={singleAppointment}></CancelAppointment>)
                        }
                    </div>
                </div>
                    
            }
        </div>
    );
};

export default MyBookings;