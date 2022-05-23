import Tables from './Table'







export default {
    title: 'Table',
    component: Tables,
    argTypes: {
        children: { control: 'array' },
        title: { control: 'text' },
        primary: { control: 'color' },
        color: { control: 'color' },
        radius: { control: 'text' },
        padding: { control: 'text' },
        border: { control: 'color' },
        height: { control: 'text' },
        width: { control: 'text' },
    },

    parameters: {
        docs: {
            description: {
                component:
                    'Table is a component that is used to display data in a table format. It is a wrapper around the HTML table element.',
            },
        },
    },
};



export const TableTest = (args) => <Tables {...args} />;
TableTest.args = {
    children: [
        <tr>
            <td>
                <p>
                    <strong>Name</strong>
                </p>

            </td>
        </tr>,
    ],
    title: 'Table',
    primary: "#f2f2",
    color: "white",
    radius: "10px",
    padding: "10px",
    border: "blue",
    height: "10px",
    width: "200px",
};
