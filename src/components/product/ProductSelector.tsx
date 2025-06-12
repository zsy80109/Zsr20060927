import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dog, Heart, Activity, Shield } from 'lucide-react';
import Button from '../ui/Button';

interface Question {
  id: number;
  text: string;
  options: {
    id: string;
    text: string;
    icon: React.ReactNode;
    productIds: string[];
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: '您的狗狗是什么类型？',
    options: [
      {
        id: 'small',
        text: '小型犬',
        icon: <Dog className="w-6 h-6" />,
        productIds: ['3', '4', '5']
      },
      {
        id: 'medium',
        text: '中型犬',
        icon: <Dog className="w-8 h-8" />,
        productIds: ['1', '2', '3']
      },
      {
        id: 'large',
        text: '大型犬',
        icon: <Dog className="w-10 h-10" />,
        productIds: ['2', '6', '7']
      }
    ]
  },
  {
    id: 2,
    text: '您最看重什么特性？',
    options: [
      {
        id: 'comfort',
        text: '舒适性',
        icon: <Heart className="w-6 h-6" />,
        productIds: ['3', '5']
      },
      {
        id: 'durability',
        text: '耐用性',
        icon: <Shield className="w-6 h-6" />,
        productIds: ['1', '2']
      },
      {
        id: 'activity',
        text: '运动功能',
        icon: <Activity className="w-6 h-6" />,
        productIds: ['6', '7']
      }
    ]
  }
];

const ProductSelector: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleAnswer = (productIds: string[]) => {
    const newAnswers = [...answers, ...productIds];
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswers(newAnswers);
    } else {
      // Find the most recommended product based on frequency
      const productFrequency = newAnswers.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);
      
      const recommendedProduct = Object.entries(productFrequency)
        .sort(([,a], [,b]) => b - a)[0][0];
      
      navigate(`/product/${recommendedProduct}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-8">
          为您推荐最适合的项圈
        </h2>
        
        <div className="mb-8">
          <div className="flex justify-between mb-4">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`h-2 flex-1 mx-1 rounded ${
                  index <= currentQuestion ? 'bg-emerald-600' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
          
          <h3 className="text-xl font-semibold mb-6">
            {questions[currentQuestion].text}
          </h3>
          
          <div className="grid gap-4">
            {questions[currentQuestion].options.map((option) => (
              <Button
                key={option.id}
                variant="outline"
                className="flex items-center justify-center p-6"
                onClick={() => handleAnswer(option.productIds)}
              >
                <div className="flex items-center">
                  {option.icon}
                  <span className="ml-3 text-lg">{option.text}</span>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSelector;