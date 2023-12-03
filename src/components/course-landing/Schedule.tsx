import React from "react";
import { View, StyleSheet } from "react-native";
import MyText from "../MyText";
import Title from "./Title";
import BulletList from "./BulletList";
import { Table, Row, Rows } from "react-native-table-component";

const Schedule = () => {
  return (
    <View className="bg-card-color h-[750px] m-2 pl-4 mt-5 rounded-2xl flex flex-col justify-center ">
      <MyText textStyle={{ fontSize: 31, paddingTop: 14 }}> Schedule</MyText>
      <Title
        icon_name="ios-barcode-sharp"
        title="Course Difficulty"
        attribute="Lvl 9"
      ></Title>
      <Title icon_name="pie-chart" title="Pre-Requisites" attribute=""></Title>
      <BulletList icon="chevron-forward-outline" data={data}></BulletList>
      <Title
        icon_name="timer-sharp"
        title="Completion Time"
        attribute="3 weeks"
      ></Title>
      <Title icon_name="calendar" title="Schedule" attribute=""></Title>

      <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#5B5B5B" }}>
          <Row
            data={tableHead}
            style={styles.head}
            textStyle={styles.headText}
          />
          <Rows
            data={tableData}
            style={{ backgroundColor: "#363636" }}
            textStyle={styles.text}
          />
        </Table>
      </View>
    </View>
  );
};

const tableHead = ["Weekday", "Timings"];
const tableData = [
  ["Sunday", "3-4pm"],
  ["Monday", "4-5pm"],
  ["Tuesday", "2-3pm"],
  ["Wednesday", "5-6pm"],
  ["Thursday", "1-2pm"],
  ["Friday", "6-7pm"],
  ["Saturday", "12-1pm"],
];

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: "center",
    width: 300,
  },
  head: { height: 44, backgroundColor: "#5B5B5B" },
  headText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  text: { margin: 6, fontSize: 16, textAlign: "center", color: "white" },
});
const data = ["hello", "world", "is bad!"];

export default Schedule;
