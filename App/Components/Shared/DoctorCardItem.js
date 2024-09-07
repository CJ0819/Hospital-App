import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { en, registerTranslation } from 'react-native-paper-dates';
import { useNavigation } from '@react-navigation/native';

registerTranslation('en', en);

const doctors = [
  {
    id: 1,
    name: 'Dr. Jane Opare',
    job: 'Dentistry',
    imageSource: require('../../../assets/DocJane.jpeg'),
    details: 'Dr.Opare is passionate about dentistry.She is dedicated to providing comprehensive and compassionate care to all patients. Dr.Opare stays updated with the latest advancements in dentistry through continuous education and professional development.',
    roomNumber: 'Main building, 2nd floor, Room 101',
    experience: '10 years',
    medicalSchool: 'University of Ghana',
    rating: '4.8⭐',
  },
  {
    id: 2,
    name: 'Dr. Mike Opoku',
    job: 'Cardiology',
    imageSource: require('../../../assets/DocMike.avif'),
    details: 'Dr.Opoku is deeply committed to cardiology.He prioritizes providing thorough and empathetic care to every patient. To ensure the highest quality of care, Dr.Opoku continuously enhances his knowledge and skills by staying informed about the latest innovations and research in [specialty] through ongoing education and professional development.',
    roomNumber: 'Main building,4th floor,Room 102',
    experience: '15 years',
    medicalSchool: 'Kwame Nkrumah University of Science and Technology',
    rating: '4.7⭐',
  },
  {
    id: 3,
    name: 'Dr. Kingsley Adjei',
    job: 'Orthopaedic',
    imageSource: require('../../../assets/Kingsley.jpeg'),
    details: 'Dr.Adjei has a profound dedication to orthopaedic.He believes in delivering meticulous and compassionate care tailored to each patients unique needs. Dr. [Last Name] is committed to lifelong learning and regularly participates in advanced training and seminars to remain at the forefront of [specialty], ensuring patients benefit from the most current and effective treatments available.',
    roomNumber: 'Annex,3rd floor,Room 103',
    experience: '8 years',
    medicalSchool: 'University of Cape Coast',
    rating: '4.9⭐',
  },
  {
    id: 4,
    name: 'Dr. Frank Oduro',
    job: 'Neurology',
    imageSource: require('../../../assets/Frank.jpeg'),
    details: 'Dr.Oduro is passionate about neurology and strives to provide personalized, compassionate care for each patient.He is dedicated to staying at the cutting edge of neurologu by engaging in continuous education and attending professional workshops and conferences. This commitment ensures that Dr.Oduro can offer the latest and most effective treatments to his patients.',
    roomNumber: 'New block,2nd floor,Room 104',
    experience: '12 years',
    medicalSchool: 'University of Health and Allied Sciences',
    rating: '4.6⭐',
  },
  {
    id: 5,
    name: 'Dr. Grace Appiah',
    job: 'Oncology',
    imageSource: require('../../../assets/grace.webp'),
    details: 'Dr.Appiah is enthusiastic about onchology, focusing on delivering individualized and empathetic care to each patient.She is committed to ongoing professional growth, regularly participating in advanced training and staying abreast of new developments in onchology. This dedication allows Dr.Appiah to provide patients with cutting-edge treatments and innovative solutions.',
    roomNumber: 'New block, 1st floor,Room 105',
    experience: '9 years',
    medicalSchool: 'University of Cape Coast',
    rating: '4.7⭐',
  },
];


const DoctorCardItem = ({ categoryName }) => {
  const navigation = useNavigation(); // useNavigation hook

  return (
    <PaperProvider>
      <View style={styles.mainContainer}>
        {doctors.map((doctor) => {
          if (categoryName && doctor.job !== categoryName) {
            return null;
          }

          return (
            <TouchableOpacity
              key={doctor.id}
              style={styles.container}
              onPress={() => navigation.navigate('DocInfo', { doctor })} // updated to 'DocInfo'
            >
              <Image source={doctor.imageSource} style={styles.image} />
              <Text style={styles.name}>{doctor.name}</Text>
              <Text style={styles.job}>{doctor.job}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
    marginBottom: 20,
    borderRadius: 10,
    width: '110%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    height: 120,
    left: -25,
  },
  image: {
    width: 110,
    height: 100,
    borderRadius: 10,
    marginTop: 100,
    left: -130,
    top: -25,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    left: 50,
    top: -100,
  },
  job: {
    fontSize: 18,
    textAlign: 'center',
    color: 'gray',
    left: 50,
    top: -100,
  },
});

export default DoctorCardItem;
