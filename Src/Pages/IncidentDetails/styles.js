import {StyleSheet} from 'react-native';

export default IncidentDetailsStyles = StyleSheet.create({
  mainContainer: {
    flex:1,
    paddingHorizontal: '4%',
    backgroundColor: '#fff',
  },
  // ================================HeaderStyle============================
  headingContainer: {
    borderRadius: 10,
    borderWidth: 1,
    padding: '4%',
    marginTop: 16,
    borderColor: '#DBDBDB',
    display: 'flex',
    gap: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  caseIdContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  caseIdText1: {
    fontSize: 14,
    color: '#242629',
  },
  caseStatusText: {
    fontSize: 14,
    color: '#42854B',
  },
  caseStatus: {
    backgroundColor: '#E5FFE8',
    borderRadius: 22,
    paddingHorizontal: '6%',
    paddingVertical: 8,
  },
  caseIdText2: {
    fontSize: 14,
    color: '#237ABF',
  },
  caseContent: {
    color: '#242629',
    fontSize: 18,
  },
  minorContainer: {
    width: 100,
    borderRadius: 30,
    backgroundColor: '#E5FFFC',
    alignItems: 'center',
    paddingVertical: 6,
  },
  reportedContainer: {
    flexDirection: 'row',
  },
  reportedText1: {
    color: '#242629',
    fontSize: 15,
  },
  reportedText2: {
    color: '#237ABF',
    fontSize: 15,
  },
  // ================================HeaderStyleEnd============================

  // ================================OtherInfoStyle============================
  OtherInfoContainer: {
    display: 'flex',
    gap: 6,
    marginTop: 16,
  },
  OtherInfoHeading: {
    color: '#237ABF',
    fontSize: 16,
    fontWeight: '500',
  },
  line: {
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
  },
  text1: {
    fontSize: 16,
    color: '#242629',
  },
  text2: {
    fontSize: 16,
    color: '#237ABF',
  },
  text3: {
    fontSize: 16,
    color: '#979797',
  },
  textContainer: {
    flexDirection: 'row',
  },
  // ================================OtherInfoStyleEnd============================

  // ================================UploadedAttachments============================

  fileText: {
    fontSize: 16,
    color: '#242629',
    textDecorationLine: 'underline',
    textAlignVertical: 'center',
  },
  fileImage: {
    width: 29.06,
    height: 32.35,
    margin: '2%',
  },

  // ================================UploadedAttachmentsEnd============================
});
