import React from 'react';
import styles from './ProficiencyCard.module.css'
import {ProficiencyCardPropsModel} from '../../models'

const ProficiencyCard: React.FC<ProficiencyCardPropsModel> = ({title, image, proficiencyLevelPercentage, color, onMouseDown,  className = ''})  => {

    return(
        <button className={`${styles.proficiency_card} ${className}`.trim()}  onMouseDown={onMouseDown} style={{ backgroundColor: color}}>
          <div className={styles.proficiency_gray_fill} style={{height: `${(100-proficiencyLevelPercentage)}%`}}>

          </div>
            <div 
              className={styles.proficiency_fill} 
              style={{ 
                height: `${proficiencyLevelPercentage}%` 
              }} 
            />
            <img className={styles.proficiency_img} src={require(`./tech_images/${image}`)} alt={`${title} logo`} />
            <span className={styles.proficiency_text}>
              {title}
            </span>
        </button>
    )
}

export default ProficiencyCard;