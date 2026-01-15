import { Button, Card, Form, Input, Table } from "antd";
import Adminlayout from "../../Layout/Adminlayout";
import { DeleteOutlined, EditOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { trimData } from "../../../modules/modules";
import axios from "axios";


const {Item} = Form;
const NewEmployee = () => {
    // states collection
    const[empForm] = Form.useForm();

    // creat enew employee
// Assuming 'values' comes from a form and might be missing required fields or has incorrect data.
const onFinish = async (values) => {
  // Example: Basic client-side validation before sending (adjust based on server's actual needs)
  if (!values.email || !values.password || values.password.length < 8) {
    console.error('Client-side validation failed: Missing email or weak password.');
    // You might show a user-friendly error message here
    return; // Prevent sending the request
  }

  try {
    // Log data before sending to verify
    console.log('Sending data:', values);
    await axios.post('http://localhost:8080/api/users', values);
    // Handle success (e.g., redirect, show success message)
  } catch (error) {
    // If the error is an Axios error and has a response, log the server's error details
    if (error.response && error.response.data) {
      console.error('Server error response:', error.response.data); // This is crucial for fixing 422s
      // Display specific server validation messages to the user
    } else {
      console.error('Failed to create user:', error.message);
    }
  }
};


    // Table Columns
    const colums = []
const columns = [
  {
    title: "Profile",
    dataIndex: "profile",
    key: "profile",
    render: (profile) =>
      profile ? (
        <img
          src={profile}
          alt="profile"
          className="w-10 h-10 rounded-full object-cover"
        />
      ) : (
        <span>No Image</span>
      ),
  },
  {
    title: "Full Name",
    dataIndex: "fullname",
    key: "fullname",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
    key: "mobile",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
        <div className="flex gap-1">
            <Button
            type="text"
            className="!bg-pink-100 !text-pink-500"
            icon={<EyeInvisibleOutlined />}
            />
            <Button
            type="text"
            className="!bg-pink-100 !text-pink-500"
            icon={<EditOutlined />}
            />
            <Button
            type="text"
            className="!bg-pink-100 !text-pink-500"
            icon={<DeleteOutlined />}
            />

        </div>
    )
  }
];
    return (
        <Adminlayout>
            <div className="grid md:grid-cols-3 gap-3">
                <Card
                title="New Employees"
                >
                    <Form 
                    form={empForm}
                    onFinish={onFinish}
                    layout="vertical">
                        <Item
                        label="Profile"
                        name="xyz"
                        >
                            <Input type="file"/>
                        </Item>
                        <div className="grid md:grid-cols-2 gap-x-2">
                                                    
                        <Item
                        name="email"
                        label="Email"
                        rules={[{required:true}]}
                        >
                            <Input />
                        </Item>
                        <Item
                        name="password"
                        label="password"
                        rules={[{required:true}]}
                        >
                            <Input/>
                        </Item>
                        <Item
                        name="fullname"
                        label="Fullname"
                        rules={[{required:true}]}
                        >
                            <Input />
                        </Item>
                        <Item
                        name="mobile"
                        label="Mobile"
                        rules={[{required:true}]}
                        >
                            <Input type="number"/>
                        </Item>
                        </div>
                        <Item
                        label= "Address"
                        name="address"
                        >
                            <Input.TextArea />
                        </Item>
                        <Item>
                            <Button
                            type="text"
                            htmlType="submit"
                            className="!bg-pink-400 !text-white !font-bold !w-full">
                            Submit

                            </Button>
                        </Item>
                    </Form>
                </Card>
                <Card
                className="md:col-span-2" 
                title="List Employees"
                >
                   <Table
  columns={columns}
  dataSource={[{}, {}]}
  rowKey={(record, index) => index}
/>
                </Card>
            </div>
        </Adminlayout>
    )
}

export default NewEmployee;