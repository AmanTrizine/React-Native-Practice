import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import images from '../../assests/images/images';
import {
  IncidentReportstyles,
  Titlestyles,
  Casesstyles,
  ReportAnIncidentstyles,
  ViewAllIncidentstyles,
} from './styles';
const IncidentReport = () => {
  const data = [
    {
      count: 10,
      content: 'Total Reported incident',
      img: images.case1,
      bgColor: '#F0FFF2',
      fontColor: '#42854B',
    },
    {
      count: 4,
      content: 'Under Process incident',
      img: images.case2,
      bgColor: '#F0FFF2',
      fontColor: '#8E7041',
    },
    {
      count: 6,
      content: 'Closed incident',
      img: images.case3,
      bgColor: '#FFF0F0',
      fontColor: '#873E3E',
    },
  ];

  const reportIncident = () => {
    console.warn('Report An Incident');
  };
  const ViewAllIncident = () => {
    console.warn('Report An Incident');
  };
  const CaseFunction = () => {
    console.warn('Case');
  };

  return (
    <View style={IncidentReportstyles.mainContainer}>
      <ScrollView>
        {/* ==========================Title=========================== */}
        <View style={Titlestyles.container}>
          <Image source={images.title} style={Titlestyles.image} />
          <View style={Titlestyles.textContainer}>
            <Text style={Titlestyles.text1}>Incident Report</Text>
            <Text style={Titlestyles.text2}>
              An incident report is a formal document used in workplaces.
            </Text>
          </View>
        </View>
        {/* ==========================TitleEnd=========================== */}

        {/* ==========================Cases=========================== */}
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {data.map(item => {
            return (
              <TouchableOpacity
                style={[
                  Casesstyles.caseContainer,
                  {backgroundColor: item.bgColor},
                ]}
                onPress={CaseFunction}>
                <Image source={item.img} style={Casesstyles.image} />

                <View style={Casesstyles.textContainer}>
                  <Text style={[Casesstyles.text1, {color: item.fontColor}]}>
                    {item.count >= 10 ? item.count : `0${item.count}`}
                  </Text>
                  <Text style={Casesstyles.text2}>{item.content}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* ==========================CasesEnd=========================== */}

        {/* ===========================Report An Incident========================== */}
        <TouchableOpacity
          style={ReportAnIncidentstyles.container}
          onPress={reportIncident}>
          <Image source={images.vector1} style={ReportAnIncidentstyles.image} />
          <Text style={ReportAnIncidentstyles.text1}>Report An Incident</Text>
          <Text style={ReportAnIncidentstyles.text2}>+</Text>
        </TouchableOpacity>
        {/* ==========================Report An Incident=========================== */}

        <TouchableOpacity
          style={ViewAllIncidentstyles.container}
          onPress={ViewAllIncident}>
          <Image source={images.vector2} style={ViewAllIncidentstyles.image1} />
          <Text style={ViewAllIncidentstyles.text1}>
            View All Incident Reports
          </Text>
          <Image source={images.vector3} style={ViewAllIncidentstyles.image2} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default IncidentReport;
