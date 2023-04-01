import React from 'react';
import Layout from "./component/Layout";
import SettingList from "./component/SettingList";
import Saved from "./assets/icons/saved.svg"
import Privacy from "./assets/icons/privacy.svg"
import Notifications from "./assets/icons/notifications.svg"
import Data from "./assets/icons/data.svg"
import Appearance from "./assets/icons/appearence.svg"
import Stickers from "./assets/icons/stickers.svg"

const list1 = [
    {key: 1, image: Saved, title: "Saved Messages"},
    {key: 2, image: Notifications, title: "Notifications"},
    {key: 3, image: Privacy, title: "Privacy and Security"},
];
const list2 = [
    {key: 4, image: Data, title: "Data and Storage"},
    {key: 5, image: Appearance, title: "Appearance"},
    {key: 6, image: Stickers, title: "Stickers"},
];

const Settings = () => {
    return (
        <Layout page="settings">
            <SettingList settingList={list1}/>
            <SettingList settingList={list2}/>
            <SettingList settingList={list2}/>
            <SettingList settingList={list2}/>
            <SettingList settingList={list2}/>
            <SettingList settingList={list2}/>
        </Layout>
    );
};

export default Settings;