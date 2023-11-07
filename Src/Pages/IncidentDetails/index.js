import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import IncidentDetailsStyles from './styles';
import images from '../../assests/images/images';
const IncidentDetails = () => {
  const OtherInfo = [
    {key: 'Incident Type', value: 'Environmental Violation'},
    {key: 'Incident Date', value: '01/01/2023'},
    {key: 'Incident Time', value: '12:30 PM'},
    {key: 'Location Of Incident', value: 'New Delhi'},
    {key: 'Department Name', value: 'Fire Department'},
    // {key:"Description Of Incident",value:"Refers to statements or reports made by individuals or groups who have been directly impacted by an incident."},
  ];
  const WitnessInfo = [
    {key: 'Name', value: 'Aman Gupta'},
    {key: 'Contact Value', value: '+91 8839314014'},
  ];

  return (
    <ScrollView>
      <View style={IncidentDetailsStyles.mainContainer}>
        {/* ==========================UpperPart=========================== */}
        <View style={IncidentDetailsStyles.headingContainer}>
          <View style={IncidentDetailsStyles.caseIdContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={IncidentDetailsStyles.caseIdText1}>Case ID# </Text>
              <Text style={IncidentDetailsStyles.caseIdText2}>
                AFS1352553234
              </Text>
            </View>
            <View style={IncidentDetailsStyles.caseStatus}>
              <Text style={IncidentDetailsStyles.caseStatusText}>Open</Text>
            </View>
          </View>

          <Text style={IncidentDetailsStyles.caseContent}>
            Explosion or fire causing damage to any place in the dock.
          </Text>

          <View style={IncidentDetailsStyles.minorContainer}>
            <Text style={{color: '#17AC9A'}}>Minor/Low</Text>
          </View>

          <View style={IncidentDetailsStyles.reportedContainer}>
            <Text style={IncidentDetailsStyles.reportedText1}>
              Reported by:
            </Text>
            <Text style={IncidentDetailsStyles.reportedText2}>
              10/10/2023 | 12:30 PM
            </Text>
          </View>
        </View>

        {/* ==========================UpperPartEnd=========================== */}
        {/* ==========================OtherInformation=========================== */}
        <View style={IncidentDetailsStyles.OtherInfoContainer}>
          <Text style={IncidentDetailsStyles.OtherInfoHeading}>
            Other Information
          </Text>
          <View style={IncidentDetailsStyles.line} />

          {OtherInfo.map(item => {
            return (
              <View style={IncidentDetailsStyles.textContainer}>
                <Text style={IncidentDetailsStyles.text1}>{item.key}</Text>
                <Text style={IncidentDetailsStyles.text2}>: {item.value}</Text>
              </View>
            );
          })}

          <View>
            <Text style={IncidentDetailsStyles.text1}>
              Description of Incident
            </Text>
            <Text style={IncidentDetailsStyles.text3}>
              Refers to statements or reports made by individuals or groups who
              have been directly impacted by an incident.
            </Text>
          </View>
        </View>

        {/* ==========================OtherInformationEnd=========================== */}
        {/* ==========================WitnessInfo=========================== */}

        <View style={IncidentDetailsStyles.OtherInfoContainer}>
          <Text style={IncidentDetailsStyles.OtherInfoHeading}>
            Witness Information
          </Text>
          <View style={IncidentDetailsStyles.line} />

          {WitnessInfo.map(item => {
            return (
              <View style={IncidentDetailsStyles.textContainer}>
                <Text style={IncidentDetailsStyles.text1}>{item.key}</Text>
                <Text style={IncidentDetailsStyles.text2}>: {item.value}</Text>
              </View>
            );
          })}
        </View>

        {/* ==========================WitnessInfoEnd=========================== */}

        {/* ==========================UploadAttachments=========================== */}
        <View style={IncidentDetailsStyles.OtherInfoContainer}>
          <Text style={IncidentDetailsStyles.OtherInfoHeading}>
            Upload Attachments
          </Text>
          <View style={IncidentDetailsStyles.line} />

          <View style={IncidentDetailsStyles.textContainer}>
            <Image
              source={images.upload1}
              style={IncidentDetailsStyles.fileImage}
            />
            <Text style={IncidentDetailsStyles.fileText}>
              Fire-causing-damage.pdf
            </Text>
          </View>

          <View style={IncidentDetailsStyles.textContainer}>
            <Image
              source={images.upload3}
              style={IncidentDetailsStyles.fileImage}
            />
            <Text style={IncidentDetailsStyles.fileText}>
              Fire-causing-damage.pdf
            </Text>
          </View>

          <View style={IncidentDetailsStyles.textContainer}>
            <Image
              source={images.upload2}
              style={IncidentDetailsStyles.fileImage}
            />
            <Text style={IncidentDetailsStyles.fileText}>
              Fire-causing-damage.pdf
            </Text>
          </View>
        </View>

        {/* ==========================UploadAttachmentsEnd=========================== */}
      </View>
    </ScrollView>
  );
};

export default IncidentDetails;
