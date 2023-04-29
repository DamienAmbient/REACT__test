import "./app-info.css";

const AppInfo = ({ employees, increased }) => {
    return (
        <div className="app-info">
            <h1>Перелік співробітників в компанії TestCompany</h1>
            <h2>Загальна кількість співробітників:{employees}</h2>
            <h2>Премію отримають:{increased}</h2>
        </div>
    );
};

export default AppInfo;
