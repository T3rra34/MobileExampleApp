import React, {useState} from 'react';
import {View, Text} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/checkbox';
import Button from '../../../components/button';
import {styles} from './styles';
import Separator from '../../../components/Separators';
import GoogleLogin from '../../../components/GoogleLogin';

const Signup = () => {
    const [checked, setChecked] = useState(false);
    
    return (
        <View style={styles.container}>
            <AuthHeader title="Sign up"/>
            <Input label="Name" placeholder='John Doe'/>
            <Input label="Email" placeholder='bomb@gmail.com'/>
            <Input label="Password" placeholder='********'/>
        <View style={styles.agreeRow}>
            <Checkbox checked={checked} onCheck={setChecked}/>
            <Text style={styles.agreeText}>I agree to the <Text style={styles.termsTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}> Privacy</Text></Text>
            </View>
            <Button title="Sign up" style={styles.button}/>
            <Separator text="Or sign up with"/>
            <GoogleLogin />
            <Text style={styles.footerText}>Already have an account?
                <Text style={styles.footerLink}> Sign in</Text>
            </Text>
        </View>
    )
}
export default Signup;